let app = new Vue({
    el: '#karting',
    data: {
        menu: ['Цены/прокат', 'Акции', 'Аренда', 'Трасса', 'Соревнования', 'Школа', 'Гоночная команда', 'Продажа картингов'],
        logo: 'logo.png',
        burger: true,
        isMenuActive: false,
        main: 'main.png',
        buttonGetStarted: 'button_get_started.png',
        f1: 'feature1.png',
        f2: 'feature2.png',
        f3: 'feature3.png',
        f4: 'feature4.png',
        f5: 'feature5.png',
        f6: 'feature6.png',
        contacts: 'contacts.png',
        largeContacts: 'large_contacts.png',
        recallButton: 'recall_button.png',
        insta: 'insta.png',
        youtube: 'youtube.png',
        twitter: 'twitter.png',
        facebook: 'facebook.png',
        isContactsActive: false
    },
    methods: {
        mouseOverContacts: function (event) {
            if (event) {
                this.isContactsActive = true;
            }
        },
        mouseOutContacts: function (event) {
            if (event) {
                this.isContactsActive = false;
            }
        },
        openMenu: function (event) {
            if (event) {
                this.burger = false;
                this.isMenuActive = true;
            }
        },
        closeMenu: function (event) {
            if (event) {
                this.burger = true;
                this.isMenuActive = false;
            }
        }
    }
})