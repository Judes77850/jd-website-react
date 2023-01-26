import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";
import anime from "animejs/lib/anime.min.js"

function Letter(){
  const test = new Letterize({
        targets: "#animateMe"
  });
  
  let animation = anime.timeline({
    targets: test.listAll, delay: anime.stagger(50),
    loop: true
  });
  animation
    .add({
      translateY: 20
    })
    .add({
      translateY: 0
    })
  return(
    <div id="animateMe">
      Julien Desaindes
    </div>
  )
}

export default Letter