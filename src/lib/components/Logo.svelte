<script lang="ts">
    export let image="/img/OneDrive.png", text="OneDrive", size=30, color="rgb(143, 143, 143)";
</script>

<figure style={`height: ${size}px; width: ${size*3}px; column-gap: ${((size*1.8)-size)*.3}px;`}>
    <img width={size} height={size} src={image} alt="Logo">
    <figcaption style={`font-size: ${size*.3}px; color: ${color};`}>{text}</figcaption>
</figure>

<style>
    figure {
        display: inline-flex;
        position: absolute;
        align-items: center;
        overflow: hidden;
    }

    figure img {
        flex-shrink: 0;
    }

    figcaption {
        font-family: Verdana;
    }
</style>