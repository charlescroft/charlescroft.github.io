class LocalTTS {
    private synth: SpeechSynthesis;

    constructor() {
        this.synth = window.speechSynthesis;
    }

    public say(text: string): void {
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = "zh-CN"; //TODO: Get lang from cactbot
        msg.volume = 1.0;
        msg.rate = 1.0;
        msg.pitch = 1.0;

        this.synth.speak(msg);
    }
}

export default LocalTTS;