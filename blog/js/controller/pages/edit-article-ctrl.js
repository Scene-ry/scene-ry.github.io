app.controller('EditArticleCtrl', function($scope, $timeout) {
  $scope.currentArticle = {
    title: "曲线救国——如何让WP/Win10M用上扫码付款功能",
    type: 0,
    info: "系统：\n\tWindows Phone/Windows 10 Mobile\n\tAndroid\n\n涉及语言：VBS、C#、smali\n\n需要的程序、应用：\n\t安卓虚拟机\n\tVisual Studio（用于编译C#）\n\tadb.exe\n\tapktool.jar\n\tsignapk.jar\n\n关键字：脚本、计划任务、Android反编译",
    content: "<p>先列原理，免得一不小心就标题党：</p><blockquote><p style=\"font-size: 12pt;\">电脑上挂着安卓模拟器，打开相应应用的二维码付款界面，定时截图，并将图复制到剪贴板，再利用脚本打开QQ好友界面，粘贴图片并发送信息。</p><p style=\"font-size: 12pt;\">相当简单粗暴的一个方法，风险当然也是有的，就是如果别有用心的人想要抓个包，你分分钟就丢了一大笔钱了（不知道支付宝和微信支付有没有限额的措施）</p></blockquote><br><p>这玩意花了我将近一周的时间，中间也遇到不少波折。没办法毕竟Too young too simple，很蟾愧，连一点微小的工作都能强行制造这么多困难_(:з」∠)_</p><p>也跟大家分享下整个研究过程吧。请注意，本文技术含量可能低于各位大神的预期，而且<strong>废话特别多</strong>，大家当周记来看就好~</p><p>首先是Android模拟器的选择。据说Genymotion是公认的坠快的膜拟器，而且还能很方便的改IMEI（防止被一些应用识别为虚拟机而封号），毫不犹豫下载一个。</p><p>然后试跑一下我要用于实验的应用，也就是我们公司所在园区的一款支付应用——</p><p>{图}</p><p>结果刚装完，闪退_(:з」∠)_</p><p>{图}</p><p>不带这么玩的啊喂！项目一开始就面临夭折？</p><p>然后不甘心Google了一下，发现可以通过logcat查看异常信息</p><pre>E/AndroidRuntime( 1175): FATAL EXCEPTION: main\nE/AndroidRuntime( 1175): java.lang.ExceptionInInitializerError\nE/AndroidRuntime( 1175):        at cn.jpush.android.service.ServiceInterface.a(Unknown Source)\nE/AndroidRuntime( 1175):        at cn.jpush.android.api.JPushInterface.init(Unknown Source)\nE/AndroidRuntime( 1175):        at cn.flyrise.MyApplication.b(Unknown Source)\nE/AndroidRuntime( 1175):        at cn.flyrise.MyApplication.onCreate(Unknown Source)\nE/AndroidRuntime( 1175):        at android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:999)\nE/AndroidRuntime( 1175):        at android.app.ActivityThread.handleBindApplication(ActivityThread.java:4151)\nE/AndroidRuntime( 1175):        at android.app.ActivityThread.access$1300(ActivityThread.java:130)\nE/AndroidRuntime( 1175):        at android.app.ActivityThread$H.handleMessage(ActivityThread.java:1255)\nE/AndroidRuntime( 1175):        at android.os.Handler.dispatchMessage(Handler.java:99)\nE/AndroidRuntime( 1175):        at android.os.Looper.loop(Looper.java:137)\nE/AndroidRuntime( 1175):        at android.app.ActivityThread.main(ActivityThread.java:4745)\nE/AndroidRuntime( 1175):        at java.lang.reflect.Method.invokeNative(NativeMethod)\nE/AndroidRuntime( 1175):        at java.lang.reflect.Method.invoke(Method.java:511)\nE/AndroidRuntime( 1175):        at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:786)\nE/AndroidRuntime( 1175):        at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:553)\nE/AndroidRuntime( 1175):        at dalvik.system.NativeStart.main(Native Method)\n\nE/AndroidRuntime( 1175): Caused by: java.lang.UnsatisfiedLinkError: Couldn't load jpush180: findLibrary returned null\nE/AndroidRuntime( 1175):        at java.lang.Runtime.loadLibrary(Runtime.java:365)\nE/AndroidRuntime( 1175):        at java.lang.System.loadLibrary(System.java:535)\nE/AndroidRuntime( 1175):        at cn.jpush.android.service.PushProtocol.&lt;clinit&gt;(Unknown Source)\nE/AndroidRuntime( 1175):        ... 16 more</pre><p>发现闪退是由于缺了一个叫jpush180的库文件（注：极光推送的运行库）</p><p>解决方法也很简单，在apk解压后的lib文件夹下找到libjpush180</p>"
  };

  $scope.articleTypeSelectionChange = function(index) {
    $('#article-type-selector').animate({ left: (index * 24.9) + '%' }, 500, 'easeOutExpo', function() {
      //console.log(index);
      $scope.currentArticle.type = index;
    });
  };

  $scope.submitArticle = function() {
    console.log($scope.currentArticle);
  };

  //console.log('EditArticleCtrl ready');
  $timeout(function() { $('#article-title-edit')[0].focus(); }, 10);
  
});