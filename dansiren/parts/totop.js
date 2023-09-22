while (true) {
    try {
        main();
        break;
    } catch {
        console.log('failed to load "totop.js"');
        setTimeout(()=>{return;}, 100);
        continue;
    }
}

function main() {
    const scrollToTopBtn = document.querySelector('#scrollToTopBtn');
    //クリックイベントを追加
    scrollToTopBtn.addEventListener('click', function() {
        window.scroll({top: 0, behavior: 'smooth'});
    });

    //スクロール時のイベントを追加
    window.addEventListener('scroll', function() {
        const scrollToTopBtn = document.querySelector('#scrollToTopBtn');
        if(window.pageYOffset > 200) {
            scrollToTopBtn.style.opacity = '1';
        }else if(window.pageYOffset <= 200) {
            scrollToTopBtn.style.opacity = '0';
        }
    });
}