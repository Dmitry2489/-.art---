const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markGuy = wrapper.querySelectorAll('.guy'),
        // markGrandmother = wrapper.querySelectorAll('.grandmother'),
        // markGranddad = wrapper.querySelectorAll('.granddad'),
        no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        wrapper.style.justifyContent = 'center';
        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            })
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });
    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
    });
    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
    });
    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl);
    });
    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
    });
    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy);
    });
    btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });
    btnGranddad.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;