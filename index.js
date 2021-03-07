
// ページ全体が読み込まれたあとにJavaScriptの処理が実行される。
window.addEventListener('load',function(){
// constは後から書き換えることのできない変数
// letは後から書き換えることのできる変数
// DOMはDocument,Object,model
// getElementById("id名")はDOMツリーから特定のHTML要素を取得するためのメソッドの1つ。
// pullDownButton変数へlistsを引き渡す。
const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")


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
    pullDownParents.setAttribute("style","display:block;")
  })
})
