type Props = {
   name: string;
   onclick?: () => void; 
}  

export function Button({name, onclick}: Props) {
   return (
      
      <div>
         <h1>Primeiros comando com react</h1>
         <main>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Eos iste ea libero consequatur officiis consequuntur alias! Sequi
               eius assumenda sed cum distinctio, labore, hic rem earum a eos modi deleniti.rem</p>

            <div>
               <input type="text" placeholder="SDigite seu nome" />
               <input type="text" placeholder="Digite seu email" />

               <button onClick={onclick} >{name}</button>
            </div>

            <div>
            </div>

         </main>


      </div>


   )
}