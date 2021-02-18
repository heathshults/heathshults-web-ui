var rotatorContainer = document.querySelector('.hs-3drotate__container');
            rotatorContainer.classList.add('hs-vanish');
        var HSThreeDRotator=document.querySelector('.hs-3drotate');
        
        var cells=HSThreeDRotator.querySelectorAll('.hs-3drotate__cell');
        var cellCount; // cellCount set from cells-range input value
        var selectedIndex=0;
        var cellWidth=HSThreeDRotator.offsetWidth;
        var cellHeight=HSThreeDRotator.offsetHeight;
        var isHorizontal=true;
        var rotateFn=isHorizontal? 'rotateY':'rotateX';
        var radius,theta;
        // console.log( cellWidth, cellHeight );

        function rotateCarousel() {
          var angle=theta*selectedIndex*-1;
          HSThreeDRotator.style.transform='translateZ('+-radius+'px) ' + rotateFn+'('+angle+'deg)';
        }

        var prevButton=document.querySelector('.hs-3drotate__prev-button');
        prevButton.addEventListener('click',function() {
          selectedIndex--;
          rotateCarousel();
        });

        var nextButton=document.querySelector('.hs-3drotate__next-button');
        nextButton.addEventListener('click',function() {
          selectedIndex++;
          rotateCarousel();
        });

        var cellsRange=document.querySelector('.hs-3drotate__cells-range');
        cellsRange.addEventListener('change',update3DRotator);
        cellsRange.addEventListener('input',update3DRotator);



        function update3DRotator() {
          cellWidth=HSThreeDRotator.offsetWidth;
          cellHeight=HSThreeDRotator.offsetHeight;
          console.log(cellHeight);
          
          cellCount=cellsRange.value;
          theta=360/cellCount;
          
          var cellSize=isHorizontal? cellWidth:cellHeight;
          radius=Math.round((cellSize/2)/Math.tan(Math.PI/cellCount));
          for(var i=0;i<cells.length;i++) {
            var cell=cells[i];
            if(i<cellCount) {
              // visible cell
              cell.style.opacity=1;
              var cellAngle=theta*i;
              cell.style.transform=rotateFn+'('+cellAngle+'deg) translateZ('+radius+'px)';
            } else {
              // hidden cell
              cell.style.opacity=0;
              cell.style.transform='none';
            }
          }

          rotateCarousel();
          
        }

        var orientationRadios=document.querySelectorAll('input[name="orientation"]');
        (function() {
          for(var i=0;i<orientationRadios.length;i++) {
            var radio=orientationRadios[i];
            radio.addEventListener('change',onOrientationChange);
          }
        })();

        function onOrientationChange() {
          var checkedRadio=document.querySelector('input[name="orientation"]:checked');
          isHorizontal=checkedRadio.value=='horizontal';
          rotateFn=isHorizontal? 'rotateY':'rotateX';
          update3DRotator();
        }

        // set initials 
        onOrientationChange();
        
        setTimeout(() => {window.onresize = update3DRotator}, 500);
        document.addEventListener('shown.bs.modal', () =>{
          
          rotatorContainer.classList.remove('hs-vanish');
          update3DRotator();
        });
