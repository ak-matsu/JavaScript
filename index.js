function pullDown(){

  // constは後から書き換えることのできない変数
  // letは後から書き換えることのできる変数
  // DOMはDocument,Object,model
  // getElementById("id名")はDOMツリーから特定のHTML要素を取得するためのメソッドの1つ。
  // pullDownButton変数へlistsを引き渡す。
  const pullDownButton = document.getElementById("lists")
  const pullDownParents = document.getElementById("pull-down")
  const pullDownChild = document.querySelectorAll(".pull-down-list")
  const currentList = document.getElementById("current-list")


    // thisとはイベント発火元ととなった要素を取得できる。
    // プルダウンの上にマウスカーソルを持ってくると薄い赤に変わる。
    pullDownButton.addEventListener('mouseover', function(){
      // setAttributeは指定した要素上に新しい属性、既存の属性値を変更する。
      this.setAttribute("style", "background-color:#FFBEDA;")
    })

    // プルダウンの上にマウスカーソルを持ってくるとイベント発火
    pullDownButton.addEventListener('mouseout', function(){
      // removeAttributeはマウスカーソルが離れたときインラインスタイルを削除する。
      this.removeAttribute("style", "background-color:#FFBEDA;")
    })

    // クリックすることでイベント発火
    pullDownButton.addEventListener('click',function(){
      //プルダウンメニューの表示と非表示の設定
      if (pullDownParents.getAttribute("style") == "display:block;") {
        // pullDownParentsにdisplay:block;が付与されている場合（つまり表示されている時）実行される
        pullDownParents.removeAttribute("style", "display:block;")
      } else {
        // pullDownParentsにdisplay:block;が付与されていない場合（つまり非表示の時）実行される
        pullDownParents.setAttribute("style", "display:block;")
      }
    })

    // コースの値を取得し表示する
    pullDownChild.forEach(function(list) {
      list.addEventListener('click', function() {
        value = list.innerHTML
        currentList.innerHTML = value
      })
    })
}

window.addEventListener('load',pullDown)