const menuItems = document.querySelectorAll('.menu-items');
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
var root = document.querySelector(':root');
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
    })
})
const openThemeModal = () => {
    themeModal.style.display ='grid'
}
const closeThemeModal = () => {
        themeModal.style.display ='none'
}
document.querySelector('.zma').addEventListener('click' ,closeThemeModal)
document.querySelector('.zm').addEventListener('click' ,closeThemeModal)
document.querySelector('.middle').addEventListener('click' ,closeThemeModal)
theme.addEventListener('click' ,openThemeModal)
const removeSizeSelector = () => {
    fontSizes.forEach(size  => {
        size.classList.remove('active')
})
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active')
    if (size.classList.contains('font-size-1')) {
        fontSize = '0.625rem'
        root.style.setProperty('--sticky-top-left', '5.4rem')
        root.style.setProperty('--sticky-top-right', '5.4rem')          
    }
    else if (size.classList.contains('font-size-2')) {   
        fontSize = '0.8125rem' 
        root.style.setProperty('--sticky-top-left', '5.4rem')
        root.style.setProperty('--sticky-top-right', '-7rem')   
    }
    else if (size.classList.contains('font-size-3')) {    
        fontSize = '1rem' 
        root.style.setProperty('--sticky-top-left', '-2rem')
        root.style.setProperty('--sticky-top-right', '-17rem')     
    }
    else if (size.classList.contains('font-size-4')) { 
        fontSize = '1.188rem'        
        root.style.setProperty('--sticky-top-left', '-5rem')
        root.style.setProperty('--sticky-top-right', '-25rem') 
    }
    else if (size.classList.contains('font-size-5')) { 
        fontSize = '1.375rem'           
        root.style.setProperty('--sticky-top-left', '-10rem')
        root.style.setProperty('--sticky-top-right', '-33rem')      
    }
    document.querySelector("html").style.fontSize = fontSize;
    })
    
})
const changeActiveColor = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    }) 
}
colorPalette.forEach(color => {
    color.addEventListener('click' , () => {
        let primaryHue
        changeActiveColor()
        if (color.classList.contains('color-1')) {
            primaryHue = 252            
        }
        else if (color.classList.contains('color-2')) {
            primaryHue = 52             
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352             
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152             
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202                         
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}
Bg1.addEventListener('click', () => {
    Bg1.classList.add('active')
    Bg3.classList.remove('actve')
    Bg2.classList.remove('active')
    window.location.reload()
})
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '20%'
    lightColorLightness = '15%'

    Bg2.classList.add('active')
    Bg1.classList.remove('actve')
    Bg3.classList.remove('active')
    changeBG()
})
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '10%'
    lightColorLightness = '0%'

    Bg3.classList.add('active')
    Bg1.classList.remove('actve')
    Bg2.classList.remove('active')
    changeBG()
})