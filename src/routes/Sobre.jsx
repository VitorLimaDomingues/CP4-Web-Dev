import React from 'react';
import Imagem from '/src/assets/imagem1.jpg'
import '../css/estilo.css'

const Sobre = () => {
    return (
    <>
      <main>
        <h1>Sobre</h1>
        
          <br />
        <img width="600" src={Imagem} alt="Imagem" className='img' />
        <p className='paragrafo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia 
          odio quis magna tempor, id condimentum libero pharetra. Etiam auctor ante 
          sit amet neque auctor tincidunt. Nunc malesuada, nunc sit amet vehicula 
          vehicula, eros risus varius dolor, eget luctus justo justo et tortor. Curabitur 
          auctor, odio id faucibus vehicula, augue urna cursus velit, ac volutpat turpis 
          purus ut lorem. Sed auctor nisi non ligula aliquet, et feugiat ligula efficitur. 
          Cras vulputate lorem ac metus condimentum, vel laoreet nulla varius. Sed sit 
          amet nulla velit. Aliquam erat volutpat. Nunc iaculis auctor nisl et fermentum. 
          Maecenas sed orci est. Mauris tempor, sapien ut elementum vulputate, libero 
          nunc facilisis nunc, nec malesuada urna sapien eget nulla. Suspendisse sed 
          scelerisque mauris, et fringilla elit. Aenean cursus massa et orci placerat, 
          ut iaculis justo scelerisque. Etiam vel volutpat magna. Nam vulputate enim 
          in quam gravida, ac pretium eros iaculis. Ut tristique purus a tortor bibendum 
          suscipit. Fusce fringilla dui ac elit venenatis, at auctor dui iaculis. Nulla 
          at magna dui. Vivamus porttitor nisi sed metus auctor, id vestibulum dui lacinia.</p>
      </main>
    </>
    )
}

export default Sobre