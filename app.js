

const app = new Vue({
    el: '#app',
    data: {
        count: 0,
    },

    methods: {
        incrementCounter: function() {
            this.count += 1;
        }
    }
});

const app2 = new Vue({
    el: "#app2",
    data: {
        buttonOffsets: {
            top: null,
            left: null
        }
    },
    methods: {
        moveButton: function(e) {
            this.buttonOffsets = {
                top: `${Math.random()*window.innerHeight}px`,
                left: `${Math.random()*window.innerWidth}px`,
            }
        }
    }
})