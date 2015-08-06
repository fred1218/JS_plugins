function startIntro(force){
    var userId = $("#userId").val();
    if (userId != ""){
        var intro = window.localStorage.getItem(userId);
        if (intro == null || force){
            introJs().setOptions({
                "skipLabel":"不再提示",
                "nextLabel":"下一步",
                "prevLabel":"上一步",
                "showProgress":false,
                "exitOnOverlayClick":false,
                "doneLabel":"完成"}).start();
            window.localStorage.setItem(userId, "1");
        }
    }
}

var userInfo = angular.module("userInfoModule", ['ui.bootstrap']);
window._user_info_import = setInterval(function () {
   if ($("#userInfoFixForm:visible").length == 1) {
       clearInterval(window._user_info_import);
       angular.bootstrap($("#userInfoFixForm"), ["userInfoModule"]);
   }
}, 100);

userInfo.controller("userInfoFormController", function ($scope, $rootScope, $window) {
	var show = "y" == $("#fixUserInfo").val();
	$scope.showUserModal = show;
	$scope.modal = {};
	$scope.modal.qq = "";
    $scope.modal.aliWW = "";
    $scope.modal.tbWW = "";
    $scope.modal.weibo = "";
    
    $scope.submitButt = function(){
    	var phone = $scope.modal.tbWW;
    	if(phone.replace(/(^\s*)|(\s*$)/g, "").length==0){
    		alert("请正确填写手机号码");
    		return;
    	}
    	var company = $scope.modal.aliWW;
    	if(company.replace(/(^\s*)|(\s*$)/g, "").length==0){
    		alert("请正确填写公司");
    		return;
    	}
    	var role = $("#userName").val();
    	if(role.replace(/(^\s*)|(\s*$)/g, "").length==0){
    		alert("请选择您的角色");
    		return;
    	}
    	$.ajax({
    		type : 'POST',
			url : "http://itest.aliyun.com/fixUser",
			async : false,
			cache : false,
			data : {
				email:$("#userId").val(),
            	qq:$scope.modal.qq,
            	company:$scope.modal.aliWW,
            	tbww:$scope.modal.tbWW,
            	weibo:$scope.modal.weibo,
            	userName:role
			}
		});
        $scope.showUserModal=false;
    }
});

userInfo.directive('usermodal', function () {
    return {
        template: '<div class="modal fade">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
            '<h4 class="modal-title">{{ title }}</h4>' +
            '</div>' +
            '<div class="modal-body" ng-transclude></div>' +
            '</div>' +
            '</div>' +
            '</div>',
        restrict: 'E',
        transclude: true,
        replace:true,
        scope:true,
        link: function postLink(scope, element, attrs) {
            scope.title = attrs.title;

            $(element).modal({
                show:false,
                backdrop:'static'
            });

            scope.$watch(attrs.visible, function(value){
                if(value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function(){
                scope.$apply(function(){
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function(){
                scope.$apply(function(){
                    scope.$parent[attrs.visible] = false;
                });
            });
        }
    };
});