
        const HSThreeDRotator: HTMLDivElement = document.querySelector('.hs-threeDRotator');
        const cells: NodeList = HSThreeDRotator.querySelectorAll('.hs-threeDRotator__cell');
        let cellCount; // cellCount set from cells-range input value
        let selectedIndex = 0;
        const cellWidth = HSThreeDRotator.offsetWidth;
        const cellHeight = HSThreeDRotator.offsetHeight;
        let isHorizontal = true;
        let rotateFn=isHorizontal ? 'rotateY':'rotateX';
        let radius,theta;
        // console.log( cellWidth, cellHeight );

        function rotateCarousel() {
          const angle = theta * selectedIndex * -1;
          HSThreeDRotator.style.transform=`translateZ(${-radius}px) ${rotateFn}(${angle}deg)`;
        }

        const prevButton=document.querySelector('.previous-button');
        prevButton.addEventListener('click',function() {
          selectedIndex--;
          rotateCarousel();
        });

        const nextButton=document.querySelector('.next-button');
        nextButton.addEventListener('click',function() {
          selectedIndex++;
          rotateCarousel();
        });

        const cellsRange: HTMLInputElement = document.querySelector('.cells-range');
        cellsRange.addEventListener('change',changeCarousel);
        cellsRange.addEventListener('input',changeCarousel);



        function changeCarousel() {
          cellCount = cellsRange.value;
          theta = 360/cellCount;
          const cellSize = isHorizontal ? cellWidth: cellHeight;
          radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
          for(let i = 0; i < cells.length; i++) {
            const cell: any = cells[i];
            if(i < cellCount) {
              // visible cell
              cell.style.opacity = 1;
              const cellAngle = theta * i;
              cell.style.transform = `${rotateFn}(${cellAngle}deg) translateZ(${radius}px)`;
            } else {
              // hidden cell
              cell.style.opacity = 0;
              cell.style.transform = 'none';
            }
          }

          rotateCarousel();
        }

        const orientationRadios=document.querySelectorAll('input[name="orientation"]');
        (function() {
          for(let i = 0; i < orientationRadios.length; i++) {
            const radio=orientationRadios[i];
            radio.addEventListener('change',onOrientationChange);
          }
        })();

        function onOrientationChange() {
          const checkedRadio: HTMLInputElement = document.querySelector('input[name="orientation"]:checked');
          isHorizontal = checkedRadio.value == 'horizontal';
          rotateFn = isHorizontal ? 'rotateY':'rotateX';
          changeCarousel();
        }

        // set initials
        onOrientationChange();

      