import React from 'react';

export default function Blog() {
  return (
    <div>
      <h1>Portfolio Page</h1> 
        <div class="outer-container">
            <div class="work1">
                <div class="caption">
                    <a href="https://preston0214.github.io/really-radical-recipes/"> <img class="work1" src="assets/images/rrr.JPG"/>
                        <div class="text-block">
                            <h4>Really Radical Recipes</h4>
                        </div> 
                    </a>
                </div>
            </div>
            <div class="work2">
                <div class="caption">
                    <a href="https://preston0214.github.io/mini-project01/"> <img class="work1" src="assets/images/HTML2.jpg"/>
                        <div class="text-block">
                            <h4>CSS project</h4>
                        </div>
                    </a>
                </div>
                <div class="caption">
                    <a href="https://preston0214.github.io/mini-project02/"> <img class="work1" src="assets/images/HTML2.jpg"/>
                        <div class="text-block">
                            <h4>Flexbox project</h4>
                        </div> 
                    </a>
                </div>
            </div>
        </div>  
            
    </div>
  );
}
