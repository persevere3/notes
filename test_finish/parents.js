function parents(dom, parent_class){
  if(dom.parentNode == document.body){
      return null
  } else {
      if(dom.parentNode.classList.contains(parent_class)){
          return dom.parentNode
      } else {
          return parents(dom.parentNode, parent_class)  
      }
  }
}