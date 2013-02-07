
jQuery.event.add(window, "load", function(){
    var converter = new Showdown.converter();

    // cssの生成 //{{{
    (function(){
        var style = $('<style />').appendTo('head');
        //var style = $('<style />');
        style.append(".markdown-body{font-size:14px;line-height:1.6;}");
        style.append(".markdown-body>*:first-child{margin-top:0!important;}");
        style.append(".markdown-body>*:last-child{margin-bottom:0!important;}");
        style.append(".markdown-body a.absent{color:#c00;}");
        style.append(".markdown-body a.anchor{display:block;padding-left:30px;margin-left:-30px;cursor:pointer;position:absolute;top:0;left:0;bottom:0;}");
        style.append(".markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin:20px 0 10px;padding:0;font-weight:bold;-webkit-font-smoothing:antialiased;cursor:text;position:relative;}");
        style.append(".markdown-body h1 .mini-icon-link,.markdown-body h2 .mini-icon-link,.markdown-body h3 .mini-icon-link,.markdown-body h4 .mini-icon-link,.markdown-body h5 .mini-icon-link,.markdown-body h6 .mini-icon-link{display:none;color:#000;}");
        style.append(".markdown-body h1:hover a.anchor,.markdown-body h2:hover a.anchor,.markdown-body h3:hover a.anchor,.markdown-body h4:hover a.anchor,.markdown-body h5:hover a.anchor,.markdown-body h6:hover a.anchor{text-decoration:none;line-height:1;padding-left:0;margin-left:-22px;top:15%;}");
        style.append(".markdown-body h1:hover a.anchor .mini-icon-link,.markdown-body h2:hover a.anchor .mini-icon-link,.markdown-body h3:hover a.anchor .mini-icon-link,.markdown-body h4:hover a.anchor .mini-icon-link,.markdown-body h5:hover a.anchor .mini-icon-link,.markdown-body h6:hover a.anchor .mini-icon-link{display:inline-block;}");
        style.append(".markdown-body h1 tt,.markdown-body h1 code,.markdown-body h2 tt,.markdown-body h2 code,.markdown-body h3 tt,.markdown-body h3 code,.markdown-body h4 tt,.markdown-body h4 code,.markdown-body h5 tt,.markdown-body h5 code,.markdown-body h6 tt,.markdown-body h6 code{font-size:inherit;}");
        style.append(".markdown-body h1{font-size:28px;color:#000;}");
        style.append(".markdown-body h2{font-size:24px;border-bottom:1px solid #ccc;color:#000;}");
        style.append(".markdown-body h3{font-size:18px;}");
        style.append(".markdown-body h4{font-size:16px;}");
        style.append(".markdown-body h5{font-size:14px;}");
        style.append(".markdown-body h6{color:#777;font-size:14px;}");
        style.append(".markdown-body p,.markdown-body blockquote,.markdown-body ul,.markdown-body ol,.markdown-body dl,.markdown-body table,.markdown-body pre{margin:15px 0;}");
        style.append(".markdown-body hr{background:transparent url(\"https://a248.e.akamai.net/assets.github.com/assets/primer/markdown/dirty-shade-1b31344236b5db3b3e085c5842db020e87a70220.png\") repeat-x 0 0;border:0 none;color:#ccc;height:4px;padding:0;}");
        style.append(".markdown-body>h2:first-child,.markdown-body>h1:first-child,.markdown-body>h1:first-child+h2,.markdown-body>h3:first-child,.markdown-body>h4:first-child,.markdown-body>h5:first-child,.markdown-body>h6:first-child{margin-top:0;padding-top:0;}");
        style.append(".markdown-body a:first-child h1,.markdown-body a:first-child h2,.markdown-body a:first-child h3,.markdown-body a:first-child h4,.markdown-body a:first-child h5,.markdown-body a:first-child h6{margin-top:0;padding-top:0;}");
        style.append(".markdown-body h1+p,.markdown-body h2+p,.markdown-body h3+p,.markdown-body h4+p,.markdown-body h5+p,.markdown-body h6+p{margin-top:0;}");
        style.append(".markdown-body li p.first{display:inline-block;}");
        style.append(".markdown-body ul,.markdown-body ol{padding-left:30px;}");
        style.append(".markdown-body ul.no-list,.markdown-body ol.no-list{list-style-type:none;padding:0;}");
        style.append(".markdown-body ul li>:first-child,.markdown-body ol li>:first-child{margin-top:0;}");
        style.append(".markdown-body dl{padding:0;}");
        style.append(".markdown-body dl dt{font-size:14px;font-weight:bold;font-style:italic;padding:0;margin:15px 0 5px;}");
        style.append(".markdown-body dl dt:first-child{padding:0;}");
        style.append(".markdown-body dl dt>:first-child{margin-top:0;}");
        style.append(".markdown-body dl dt>:last-child{margin-bottom:0;}");
        style.append(".markdown-body dl dd{margin:0 0 15px;padding:0 15px;}");
        style.append(".markdown-body dl dd>:first-child{margin-top:0;}");
        style.append(".markdown-body dl dd>:last-child{margin-bottom:0;}");
        style.append(".markdown-body blockquote{border-left:4px solid #DDD;padding:0 15px;color:#777;}");
        style.append(".markdown-body blockquote>:first-child{margin-top:0;}");
        style.append(".markdown-body blockquote>:last-child{margin-bottom:0;}");
        style.append(".markdown-body table th{font-weight:bold;}");
        style.append(".markdown-body table th,.markdown-body table td{border:1px solid #ccc;padding:6px 13px;}");
        style.append(".markdown-body table tr{border-top:1px solid #ccc;background-color:#fff;}");
        style.append(".markdown-body table tr:nth-child(2n){background-color:#f8f8f8;}");
        style.append(".markdown-body img{max-width:100%;}");
        style.append(".markdown-body span.frame{display:block;overflow:hidden;}");
        style.append(".markdown-body span.frame>span{border:1px solid #ddd;display:block;float:left;overflow:hidden;margin:13px 0 0;padding:7px;width:auto;}");
        style.append(".markdown-body span.frame span img{display:block;float:left;}");
        style.append(".markdown-body span.frame span span{clear:both;color:#333;display:block;padding:5px 0 0;}");
        style.append(".markdown-body span.align-center{display:block;overflow:hidden;clear:both;}");
        style.append(".markdown-body span.align-center>span{display:block;overflow:hidden;margin:13px auto 0;text-align:center;}");
        style.append(".markdown-body span.align-center span img{margin:0 auto;text-align:center;}");
        style.append(".markdown-body span.align-right{display:block;overflow:hidden;clear:both;}");
        style.append(".markdown-body span.align-right>span{display:block;overflow:hidden;margin:13px 0 0;text-align:right;}");
        style.append(".markdown-body span.align-right span img{margin:0;text-align:right;}");
        style.append(".markdown-body span.float-left{display:block;margin-right:13px;overflow:hidden;float:left;}");
        style.append(".markdown-body span.float-left span{margin:13px 0 0;}");
        style.append(".markdown-body span.float-right{display:block;margin-left:13px;overflow:hidden;float:right;}");
        style.append(".markdown-body span.float-right>span{display:block;overflow:hidden;margin:13px auto 0;text-align:right;}");
        style.append(".markdown-body code,.markdown-body tt{margin:0 2px;padding:0 5px;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px;}");
        style.append(".markdown-body pre>code{margin:0;padding:0;white-space:pre;border:none;background:transparent;}");
        style.append(".markdown-body .highlight pre,.markdown-body pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px;}");
        style.append(".markdown-body pre code,.markdown-body pre tt{background-color:transparent;border:none;}#markdown-help{display:none;}");
        console.log("[style] " + style.html());
    })();//}}}

    $('div' + '.mdab').each(function(){
        $(this).addClass('markdown-body');
        console.log('MDAB : '+$(this).html());
        var txt = $(this).html().replace(/<br[ \t\/]*?>/g,'\n').replace(/&nbsp;/g,' ');
        var mdhtml = converter.makeHtml(txt);
        $(this).html(mdhtml);
    });
});

