import calcScroll from './calcScroll';

const modals = () => {
    let scroll = calcScroll();
    let btnPressed = false;
    let iconGift = document.querySelector('.fixed-gift');

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            dataModal = document.querySelectorAll('[data-modal]');




        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                if (destroy) {
                    item.remove();
                }

                dataModal.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });

                btnPressed = true;

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                iconGift.style.paddingRight = ` ${scroll}px`;

            });
        });


        close.addEventListener('click', () => {
            dataModal.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            iconGift.style.paddingRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                dataModal.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                iconGift.style.paddingRight = `0px`;


            }
        });

    }

    function showModalByTime(selector, time) {

        setTimeout(function () {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });
            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                iconGift.style.paddingRight = ` ${scroll}px`;
            }
        }, time);
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); // для подержки старых браузеров

            if (!btnPressed && ((window.pageYOffset + document.documentElement.clientHeight + 20) >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }


    bindModal('.button-design', '.popup-design', ' .popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', ' .popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', ' .popup-gift .popup-close', true);
    showModalByTime('.popup-consultation', 60000);
    openByScroll('.fixed-gift');
};

export default modals;