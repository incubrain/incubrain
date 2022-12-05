interface Modals {
  key: HTMLElement
}

const modals = ref({} as Modals) 

export default function useModal() {
  //
  function fadeOut(el: HTMLElement) {
    let opacity = 1
    el.style.opacity = '1'
    do {
      opacity -= 0.1
      el.style.opacity = String(opacity)
    } while (opacity < 0)
    el.style.display = 'none'
  }
  
  function fade(el: HTMLElement) {
    let opacity = parseFloat(el.style.opacity)
    el.style.opacity = '1'
    do {
      opacity += 0.2
      el.style.opacity = String(opacity)
    } while (opacity > 1)
    el.style.display = 'none'
    el.style.opacity = String(opacity)
  }

  function fadeIn(el: HTMLElement) {
    el.style.opacity = '0'
    el.style.display = 'block'
    fade(el)
  }

  function modalHandler(modalId: keyof Modals, visible: boolean) {
    const modal = modals.value[modalId] 
    if (visible) {
      fadeIn(modal)
    } else {
      fadeOut(modal)
    }
  }

  return {
    modalHandler,
    fadeIn,
    fadeOut
  }
}