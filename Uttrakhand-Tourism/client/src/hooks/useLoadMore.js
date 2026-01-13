import { useEffect } from 'react';

const useLoadMore = (containerClass, itemClass, initialCount) => {
  useEffect(() => {
    const loadMoreBtn = document.querySelector(`.${containerClass} .load-more .btn.load-more`);
    const seeLessBtn = document.querySelector(`.${containerClass} .load-more .btn.see-less`);
    const items = document.querySelectorAll(`.${containerClass} .box-container .${itemClass}`);
    
    let currentItem = initialCount;

    if (loadMoreBtn) {
      loadMoreBtn.onclick = () => {
        for (let i = currentItem; i < currentItem + 3 && i < items.length; i++) {
          items[i].style.display = 'inline-block';
        }
        currentItem += 3;
        
        if (currentItem >= items.length) {
          loadMoreBtn.style.display = 'none';
          if (seeLessBtn) seeLessBtn.style.display = 'block';
        }
      };
    }

    if (seeLessBtn) {
      seeLessBtn.onclick = () => {
        for (let i = items.length - 1; i >= initialCount; i--) {
          items[i].style.display = 'none';
        }
        currentItem = initialCount;
        seeLessBtn.style.display = 'none';
        if (loadMoreBtn) loadMoreBtn.style.display = 'block';
      };
    }
  }, [containerClass, itemClass, initialCount]);
};

export default useLoadMore;
