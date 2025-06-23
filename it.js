 let keyToAudio = {
        W: "1",
        A: "2",
        S: "3",
        D: "4",
        J: "5",
        K: "6",
        L: "7",
      };

      Object.keys(keyToAudio).forEach((key) => {
        const btn = document.getElementById(key);
        const audioId = keyToAudio[key];
        const audio = document.getElementById(audioId);

        btn.addEventListener("click", () => {
          audio.currentTime = 0; // rewind to start
          audio.play();
        });
      });

      document.addEventListener("keydown", (event) => {
        const key = event.key.toUpperCase();
        if (keyToAudio[key]) {
          const audioId = keyToAudio[key];
          const audio = document.getElementById(audioId);
          audio.currentTime = 0; // rewind to start
          audio.play();
        }
      });