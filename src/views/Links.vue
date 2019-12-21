<template>
    <z-view>
        <h1>Social links</h1>
        <div slot="extension">
                <z-spot
                    v-for="(elem, index) in elements"
                    :key="index"
                    :label="elem.label"
                    :label-pos="elem.labelPos"
                    :angle="elem.angle"
                    :distance="120"
                    @click.native.prevent="goToUrl(elem.url)"
                    size="s"
                >
                    <i :class="elem.icon"></i>
                </z-spot>
        </div>
    </z-view>
</template>

<script>
    export default {
        data() {
            return {
                elements: [
                    {label: 'Facebook', angle: 45, labelPos: 'right', icon: 'fab fa-facebook-f', url: 'https://fontawesome.com/icons/link?style=solid'},
                    {label: 'GitHub', angle: 135, icon: 'fab fa-github', labelPos: 'left'},
                    {label: 'Telegram', angle: 225, icon: 'fab fa-telegram-plane', labelPos: 'left'},
                    {label: 'LinkedInd', angle: 315, icon: 'fab fa-linkedin-in', labelPos: 'right'}
                ]
            }
        },
        methods: {
            goToUrl: function(url) {
                window.open(url, '_blank')
            }
        }
    }
</script>