<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    const size=28;
</script>

<div class="form-wrap" spellcheck="false">
    <Logo image="/favicon.png" text="Tanzania Commercial Bank" {size}/>
    <form method="post" style={`top: ${size*3.25}px;`}>
        <input name="username" placeholder="Username" maxlength="22" type="text" autocomplete="off" pattern="[a-z0-9_]+" required>
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
            border: solid 2px rgb(175, 143, 11);
            border-radius: 7px;
            padding: 12px;
            background-color: rgb(22, 21, 14);
            font-family: inherit;
        }
    }

    button {
        margin-top: 6px;
        font-size: x-small;
        opacity: .8;
        color-scheme: dark;
    }

    footer {
        color: rgba(255, 255, 255, 0.15);
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

    form input[type="text"],
    form input[type="password"] {
        width: 100%;
        font-size: .9em;
    }

    input[type="text"],
    input[type="password"] {
        height: 26px;
        box-sizing: border-box;
        padding: 0 6px;
        margin: 2px 0;
        border-radius: 2px;
        background-color: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.75);
        font-family: inherit;
    }

    input[type="text"]:not(:focus),
    input[type="password"]:not(:focus),
    input:placeholder-shown {
        color: rgba(255, 255, 255, 0.4);
    }

    input[type="text"],
    input[type="password"],
    input[type="text"]:focus,
    input[type="password"]:focus {
        outline: none;
        border: none;
    }
</style>