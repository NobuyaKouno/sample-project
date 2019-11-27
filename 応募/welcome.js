
        var id = ['a']; //指定するidを全て配列で渡す
        var tx = [];
        var txCount = [];
        var txSp = 100; // テキストの表示速度
        var dly = 1000; // 次の文章までの待ち時間
        var count = 0;
        var btncount = 0;

        window.onload = function(){
        kamikakushi();
        countSet();
        itimozi()
        }
        function reset(){
            id = ['a']; //指定するidを全て配列で渡す
            tx = [];
            txCount = [];
            txSp = 100; // テキストの表示速度
            dly = 1000; // 次の文章までの待ち時間
            count = 0;
            btncount = 0;
       
        }
        function mojiokuri(){        
            kamikakushi();
            countSet();
            itimozi()
        }
        function countSet(){ // 文字数カウントの初期設定
        for(n=0;n<id.length;n++){
            txCount[n] = 0;
        }
        }


        function kamikakushi(){ // 要素を取得して非表示（opacity:0;）にする
        for(i=0;i<id.length;i++){
            id[i] = document.getElementById(id[i]);
            tx[i] = id[i].firstChild.nodeValue; // 初期の文字列
            id[i].innerHTML = '';
        }
        }

        function itimozi(){ //　一文字ずつ表示
        id[count].innerHTML = tx[count].substr( 0, ++txCount[count] )+"_"; // テキストの指定した数の間の要素を表示
        if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
            setTimeout("itimozi()",txSp); // 次の文字へ進む
        }else{
        id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
            count++; // 次の段落に進む為のカウントアップ
            if(count != id.length){ // id数が最後なら終了
            setTimeout("itimozi()",dly); // 次の段落へ進む
            }
        }
        }
  

$(function(){
    $(".yoke").click(function(){
        //  id = ['a']; //指定するidを全て配列で渡す
        //  tx = [];
        //  txCount = [];
        //  count = 0;
        //  txSp = 100; // テキストの表示速度
        //  dly = 1000; // 次の文章までの待ち時間
        

        // $(".yoke").css("position"," relative")
        // $(".yoke").css("left","100px")  
        if(btncount==0){
            btncount++
            $("#a").text("きちんと説明を全部きいてからにしてね")
            countSet();
            kamikakushi();
            itimozi()
        }else if(btncount==1){
            btncount++
            $("#a").text("2回目～")
            countSet();
            kamikakushi();
            itimozi()
        }else if(btncount==2){
            btncount++
            $("#a").text("３回目～")
            countSet();
            kamikakushi();
            itimozi()
        }
    });

    $(".yoke2").click(function(){
 

        $.when(
            reset(),

            $("#a").text("きちんと説明を全部きいてからにしてね"),
            mojiokuri()
        
        ).done(function(){ 
            reset(),
            $("#a").text("説明２こめ"),
            mojiokuri();
    
        
        });
        
    });

    


});