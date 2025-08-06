<template>
    <div class="candle-container">
        <div class="candle">
            <div class="wick" />
            <div class="flame" />
        </div>
    </div>
</template>

<style scoped>
.candle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.candle {
    position: relative;
    width: 12px;
    height: 50px;
    background-color: #fafafa;
    /* A gentle off-white */
    border-radius: 4px 4px 0 0;
    box-shadow: inset 2px -2px 4px rgba(0, 0, 0, 0.15);
}

.wick {
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 7px;
    background-color: #333;
}

.flame {
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 16px;
    background-color: #ffc700;
    /* Warm yellow */
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    box-shadow: 0 0 10px #ffc700, 0 0 20px #ffc700, 0 0 30px #ffc700, 0 0 40px #ff9800;
    animation: flicker 1.5s infinite ease-in-out;
}

@keyframes flicker {

    0%,
    100% {
        transform: translateX(-50%) scaleY(1) scaleX(1);
        opacity: 1;
    }

    50% {
        transform: translateX(-50%) scaleY(0.95) scaleX(1.05);
        opacity: 0.95;
    }
}
</style>