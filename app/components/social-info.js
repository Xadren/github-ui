import Component from '@ember/component';

export default Component.extend({
    isExpanded: true,

    actions: {
        toggleLinkSection() {
            this.toggleProperty('isExpanded');
            this.sendAction('on-links-toggle');
        }
    }
});
