<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    const size=28;
</script>

<div class="display"></div>
<div class="form-wrap" spellcheck="false">
    <Logo image="/favicon.png" text="Tanzania Commercial Bank" color="rgb(33 84 91)" {size}/>
    <form method="post" style={`top: ${size*3.25}px;`}>
        <input name="username" placeholder="Username" maxlength="12" type="text" autocomplete="off" pattern="[a-z0-9_]&#123;3,&#125;" required>
        <input name="password" placeholder="Password" minlength="6" type="password" autocomplete="off" required>
        <button>Login</button>
    </form>
    <footer>- {new Date().getFullYear()} -</footer>
</div>

<style>
    @media screen and (min-aspect-ratio: 1/1){
        .form-wrap {
            position: absolute;
            overflow: hidden;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: calc(40vmin + 20vmax);
            height: 40vmin;
            box-sizing: border-box;
            border: solid 2px rgb(4 69 58);
            border-radius: var(--form-shape);
            padding: 12px;
            font-family: inherit;
            backdrop-filter: blur(30px);
        }
    }

    button {
        margin-top: 6px;
        font-size: x-small;
        color: rgba(255, 255, 255, 0.9);
        opacity: .7;
        border-color: transparent;
        border-radius: var(--form-input-shape);
        background-color: rgb(4, 22, 20);
    }

    footer {
        color: rgba(240, 240, 240, 0.5);
        position: absolute;
        top: 95%;
        right: 3%;
        transform: translate(-3%,-95%);
    }

    form {
        z-index: -1;
        font-family: inherit;
        overflow: inherit;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        max-width: 170px;
    }

    input[type="text"],
    input[type="password"],
    input:placeholder-shown {
        height: 26px;
        width: 100%;
        font-size: .9em;
        font-weight: 500;
        box-sizing: border-box;
        padding: 0 6px;
        margin: 2px 0;
        border-radius: var(--form-input-shape);
        background-color: rgba(245, 245, 245, 0.3);
        color: rgb(25 33 37);
        font-family: inherit;
    }

    input[type="text"]:not(:focus),
    input[type="password"]:not(:focus),
    input::placeholder {
        color: rgba(25 33 37 / .6);
    }

    input[type="text"],
    input[type="password"],
    input[type="text"]:focus,
    input[type="password"]:focus {
        outline: none;
        border: none;
    }

    .display {
        display: block;
        overflow: hidden;
        width: 100svw;
        height: 100svh;
        background: no-repeat url("/img/background.jpeg");
        background-position: 0 30%;
        filter: blur(2px);
    }
</style>