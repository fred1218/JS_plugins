library angular2.test.transform.integration;

import 'package:angular2/src/dom/html_adapter.dart';
import 'package:angular2/transformer.dart';
import 'package:code_transformers/tests.dart';
import 'package:dart_style/dart_style.dart';

import '../common/read_file.dart';

main() {
  allTests();
}

var formatter = new DartFormatter();
var transform = new AngularTransformerGroup(new TransformerOptions(
    ['web/index.dart'],
    reflectionEntryPoints: ['web/index.dart']));

class IntegrationTestConfig {
  final String name;
  final Map<String, String> assetPathToInputPath;
  final Map<String, String> assetPathToExpectedOutputPath;

  IntegrationTestConfig(this.name,
      {Map<String, String> inputs, Map<String, String> outputs})
      : this.assetPathToInputPath = inputs,
        this.assetPathToExpectedOutputPath = outputs;
}

void allTests() {
  Html5LibDomAdapter.makeCurrent();

  /*
   * Each test has its own directory for inputs & an `expected` directory for
   * expected outputs.
   *
   * In addition to these declared inputs, we inject a set of common inputs for
   * every test.
   */
  var commonInputs = {
    'angular2|lib/src/core/annotations_impl/annotations.dart':
        '../../../lib/src/core/annotations_impl/annotations.dart',
    'angular2|lib/src/core/application.dart': '../common/application.dart',
    'angular2|lib/src/reflection/reflection_capabilities.dart':
        '../common/reflection_capabilities.dart',
    'angular2|lib/di.dart': '../../../lib/di.dart',
    'angular2|lib/src/di/decorators.dart':
        '../../../lib/src/di/decorators.dart',
  };

  var tests = [
    new IntegrationTestConfig(
        'should generate proper code for a Component defining only a selector.',
        inputs: {
      'a|web/index.dart': 'simple_annotation_files/index.dart',
      'a|web/bar.dart': 'simple_annotation_files/bar.dart'
    },
        outputs: {
      'a|web/bar.ng_deps.dart':
          'simple_annotation_files/expected/bar.ng_deps.dart',
      'a|web/bar.ng_meta.json':
          'simple_annotation_files/expected/bar.ng_meta.json',
      'a|web/index.ng_deps.dart':
          'simple_annotation_files/expected/index.ng_deps.dart'
    }),
    new IntegrationTestConfig(
        'should generate proper code for a Component with multiple deps.',
        inputs: {
      'a|web/index.dart': 'two_deps_files/index.dart',
      'a|web/foo.dart': 'two_deps_files/foo.dart',
      'a|web/bar.dart': 'two_deps_files/bar.dart'
    },
        outputs: {
      'a|web/bar.ng_deps.dart': 'two_deps_files/expected/bar.ng_deps.dart'
    }),
    new IntegrationTestConfig(
        'should generate proper code for a Component declaring a '
        'componentService defined in another file.',
        inputs: {
      'a|web/index.dart': 'list_of_types_files/index.dart',
      'a|web/foo.dart': 'list_of_types_files/foo.dart',
      'a|web/bar.dart': 'list_of_types_files/bar.dart'
    },
        outputs: {
      'a|web/bar.ng_deps.dart': 'list_of_types_files/expected/bar.ng_deps.dart'
    }),
    new IntegrationTestConfig(
        'should generate a factory for a class with no declared ctor.',
        inputs: {
      'a|web/index.dart': 'synthetic_ctor_files/index.dart',
      'a|web/bar.dart': 'synthetic_ctor_files/bar.dart'
    },
        outputs: {
      'a|web/bar.ng_deps.dart': 'synthetic_ctor_files/expected/bar.ng_deps.dart'
    }),
    new IntegrationTestConfig('should preserve multiple annotations.', inputs: {
      'a|web/index.dart': 'two_annotations_files/index.dart',
      'a|web/bar.dart': 'two_annotations_files/bar.dart',
      'angular2|lib/src/core/annotations_impl/view.dart':
          '../../../lib/src/core/annotations_impl/view.dart'
    }, outputs: {
      'a|web/bar.ng_deps.dart':
          'two_annotations_files/expected/bar.ng_deps.dart'
    })
  ];

  var cache = {};

  for (var config in tests) {
    // Read in input & output files.
    config.assetPathToInputPath
      ..addAll(commonInputs)
      ..forEach((key, value) {
        config.assetPathToInputPath[key] =
            cache.putIfAbsent(value, () => _readFile(value));
      });
    config.assetPathToExpectedOutputPath.forEach((key, value) {
      config.assetPathToExpectedOutputPath[key] = cache.putIfAbsent(value, () {
        var code = _readFile(value);
        return value.endsWith('dart') ? formatter.format(code) : code;
      });
    });
    testPhases(
        config.name,
        [
          [transform]
        ],
        config.assetPathToInputPath,
        config.assetPathToExpectedOutputPath,
        [],
        StringFormatter.noNewlinesOrSurroundingWhitespace);
  }
}

/// Smooths over differences in CWD between IDEs and running tests in Travis.
String _readFile(String path) => readFile('integration/$path');
