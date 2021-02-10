
        const HS3DRotator: HTMLDivElement = document.querySelector('.hs-3d-rotator');
        const cells: NodeList = HS3DRotator.querySelectorAll('.hs-3d-rotator__cell');
        let cellCount; // cellCount set from cells-range input value
        let selectedIndex = 0;
        const cellWidth = HS3DRotator.offsetWidth;
        const cellHeight = HS3DRotator.offsetHeight;
        let isHorizontal = true;
        let rotateFn = isHorizontal ? 'rotateY':'rotateX';
        let radius
        let theta;
        // console.log( cellWidth, cellHeight );

        function rotateCarousel() {
          const angle = theta * selectedIndex * -1;
          HS3DRotator.style.transform=`translateZ(${-radius}px) ${rotateFn}(${angle}deg)`;
        }

        const prevButton = document.querySelector('.hs-3d-rotator-prev');
        prevButton.addEventListener('click',function() {
          selectedIndex--;
          rotateCarousel();
        });

        const nextButton=document.querySelector('.hs-3d-rotator-next');
        nextButton.addEventListener('click',function() {
          selectedIndex++;
          rotateCarousel();
        });

        const cellsRange: HTMLInputElement = document.querySelector('.hs-3d-rotator-cells-range');
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

        const orientationInputs=document.querySelectorAll('input[name="orientation"]');
        (function() {
          for(let i = 0; i < orientationInputs.length; i++) {
            const radio=orientationInputs[i];
            radio.addEventListener('change',onOrientationChange);
          }
        })();

        function onOrientationChange() {
          const checkedRadioInput: HTMLInputElement = document.querySelector('input[name="orientation"]:checked');
          isHorizontal = checkedRadioInput.value == 'horizontal';
          rotateFn = isHorizontal ? 'rotateY':'rotateX';
          changeCarousel();
        }

        // set initials
        onOrientationChange();

      