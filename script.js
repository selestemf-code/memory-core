/* =========================================
   MEMORY CORE
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const lockScreen = document.getElementById("lockScreen");
const story = document.getElementById("story");

const answerInput = document.getElementById("answerInput");
const unlockButton = document.getElementById("unlockButton");
const wrongAnswer = document.getElementById("wrongAnswer");

const sceneContainer = document.getElementById("sceneContainer");

const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

const sceneCounter = document.getElementById("sceneCounter");

const mainMusic = document.getElementById("mainMusic");
const musicButton = document.getElementById("musicButton");


/* =========================================
   MUSIC SETTINGS
========================================= */

const NORMAL_VOLUME = 0.70;
const VIDEO_VOLUME = 0.18;

let musicPlaying = false;
let currentVideo = null;
let fadeInterval = null;


/* =========================================
   FRIENDS
========================================= */

const friends = [

    {
        name: "Yuanne",
        role: "Funny & Artistic",
        message:
            "Years from now, the things you create may look completely different. " +
            "But somewhere in all of it, there will always be that same person who " +
            "could turn an ordinary moment into something worth remembering.",
        future:
            "Keep creating. Keep making people laugh."
    },

    {
        name: "Shane",
        role: "Funny & Loving",
        message:
            "The future may take you places none of you can imagine yet. " +
            "Still, there will always be a version of you who cared deeply, laughed loudly, " +
            "and made the people around you feel a little less alone.",
        future:
            "Never lose the warmth you carry."
    },

    {
        name: "Kim Audrey",
        role: "Funny & Loving",
        message:
            "One day, life may become busier and the days may move faster. " +
            "But the kindness you gave so naturally will remain in the memories of people " +
            "who were lucky enough to know you during this chapter.",
        future:
            "Keep choosing kindness."
    },

    {
        name: "Yhi Shin",
        role: "Funny & Creative",
        message:
            "There will always be another idea waiting to be made, another strange thought " +
            "waiting to become something brilliant. Somewhere in the future, remember that " +
            "your creativity was already part of what made this little world special.",
        future:
            "Keep imagining things differently."
    },

    {
        name: "Adrian",
        role: "The Joker",
        message:
            "Some people leave behind achievements. Others leave behind stories that make " +
            "everyone laugh years later. You may end up being both—but the jokes will probably " +
            "be the ones people remember first.",
        future:
            "Never run out of jokes."
    },

    {
        name: "Elijah",
        role: "Funny & Musical",
        message:
            "There will be many stages, many songs, and many versions of you waiting in the future. " +
            "Wherever you end up, may you always remember the person who could turn a quiet moment " +
            "into something worth listening to.",
        future:
            "Keep playing your own soundtrack."
    },

    {
        name: "Renzo",
        role: "Funny & Artistic",
        message:
            "Your art may change, your style may change, and life may completely surprise you. " +
            "But the ability to find humor and beauty in ordinary things is something worth carrying " +
            "into every version of yourself.",
        future:
            "Keep making ordinary things beautiful."
    },

    {
        name: "Jairus",
        role: "Funny & eSports",
        message:
            "There will always be another match, another challenge, and another level to reach. " +
            "But beyond every win and every loss, remember the version of yourself who could compete, " +
            "laugh, and enjoy the moment with the people beside you.",
        future:
            "Play hard. Live harder."
    },

    {
        name: "Jerald",
        role: "Funny & Artistic",
        message:
            "Maybe the things you create in the future will be bigger than anything you imagined here. " +
            "Maybe they won't. Either way, never forget that your creativity was already enough to make " +
            "ordinary days feel a little more interesting.",
        future:
            "Keep creating without limits."
    },

    {
        name: "Hadrian Luther",
        role: "Roblox & Best Laughter Medicine",
        message:
            "Some memories will fade. Some conversations will be forgotten. But there are certain laughs " +
            "that become permanently attached to a place and a group of people. Yours might just be one of them.",
        future:
            "Keep laughing until everyone else does."
    },

    {
        name: "Jesfer",
        role: "The Joker",
        message:
            "The future might become serious sometimes. Responsibilities will pile up, plans will change, " +
            "and adulthood will probably demand a lot. But somewhere in all of that, there should always be " +
            "room for one more ridiculous joke.",
        future:
            "Never let life become too serious."
    },

    {
        name: "John Paul",
        role: "Funny & eSports Player",
        message:
            "There will be plenty of games left to play and plenty of goals left to chase. " +
            "But remember that some of the best victories were never about the scoreboard—they were about " +
            "who was there while you were playing.",
        future:
            "Keep chasing the next level."
    },

    {
        name: "Kurlby",
        role: "The Joker",
        message:
            "Someday, the jokes that seemed completely unnecessary might become some of the memories " +
            "you miss the most. So when life gets too busy, remember the person who could make a moment " +
            "funny simply by being there.",
        future:
            "Keep the chaos alive."
    },

    {
        name: "Ivan Kareem",
        role: "Funny & Musical",
        message:
            "Every song eventually ends, but that doesn't make it any less meaningful. " +
            "May the music you make in the future always remind you that there was once a time when " +
            "laughter, friendship, and simple moments were enough.",
        future:
            "Keep making music worth remembering."
    }

];


/* =========================================
   SCENES
========================================= */

const scenes = [

    /* -----------------------------------------
       CHAPTER 01
    ----------------------------------------- */

    {
        type: "images",
        chapter: "CHAPTER 01 // THE BEGINNING",
        images: [
            "scene-01-01.jpe",
            "scene-01-02.jpe",
            "scene-01-03.jpe",
            "scene-01-04.jpe"
        ]
    },

    {
        type: "message",
        chapter: "CHAPTER 01 // THE BEGINNING",
        title: "September 2025.",
        text:
            "It started with projects.<br><br>" +
            "Deadlines. Requirements. Group work.<br>" +
            "Just another school year beginning.<br><br>" +
            "Or so it seemed."
    },

    {
        type: "images",
        chapter: "CHAPTER 01 // THE BEGINNING",
        images: [
            "scene-03-01.jpe",
            "scene-03-02.jpe",
            "scene-03-03.jpe",
            "scene-03-04.jpe"
        ]
    },


    /* -----------------------------------------
       CHAPTER 02
    ----------------------------------------- */

    {
        type: "video",
        chapter: "CHAPTER 02 // WHEN WE GOT COMFORTABLE",
        video: "scene-04.mp4"
    },

    {
        type: "images",
        chapter: "CHAPTER 02 // WHEN WE GOT COMFORTABLE",
        images: [
            "scene-05-01.jpe",
            "scene-05-02.jpe",
            "scene-05-03.jpe",
            "scene-05-04.jpe"
        ]
    },

    {
        type: "video",
        chapter: "CHAPTER 02 // WHEN WE GOT COMFORTABLE",
        video: "scene-06.mp4"
    },

    {
        type: "images",
        chapter: "CHAPTER 02 // WHEN WE GOT COMFORTABLE",
        images: [
            "scene-07-01.jpe",
            "scene-07-02.jpe",
            "scene-07-03.jpe",
            "scene-07-04.jpe"
        ]
    },


    /* -----------------------------------------
       CHAPTER 03
    ----------------------------------------- */

    {
        type: "video",
        chapter: "CHAPTER 03 // THE CHAOS",
        video: "scene-08.mp4"
    },

    {
        type: "images",
        chapter: "CHAPTER 03 // THE CHAOS",
        images: [
            "scene-09-01.jpe",
            "scene-09-02.jpe",
            "scene-09-03.jpe",
            "scene-09-04.jpe"
        ]
    },

    {
        type: "message",
        chapter: "CHAPTER 03 // THE CHAOS",
        title: "Somewhere along the way...",
        text:
            "The jokes got louder.<br>" +
            "The conversations got longer.<br>" +
            "The chaos became normal.<br><br>" +
            "And somehow, being together became part of everyday life."
    },

    {
        type: "video",
        chapter: "CHAPTER 03 // THE CHAOS",
        video: "scene-11.mp4"
    },

    {
        type: "images",
        chapter: "CHAPTER 03 // THE CHAOS",
        images: [
            "scene-12-01.jpe",
            "scene-12-02.jpe",
            "scene-12-03.jpe",
            "scene-12-04.jpe"
        ]
    },


    /* -----------------------------------------
       CHAPTER 04
    ----------------------------------------- */

    {
        type: "images",
        chapter: "CHAPTER 04 // THE MEMORIES WE DIDN'T PLAN",
        images: [
            "scene-13-01.jpe",
            "scene-13-02.jpe",
            "scene-13-03.jpe",
            "scene-13-04.jpe",
            "scene-13-05.jpe"
        ]
    },

    {
        type: "video",
        chapter: "CHAPTER 04 // THE MEMORIES WE DIDN'T PLAN",
        video: "scene-14.mp4"
    },

    {
        type: "images",
        chapter: "CHAPTER 04 // THE MEMORIES WE DIDN'T PLAN",
        images: [
            "scene-15-01.jpe",
            "scene-15-02.jpe",
            "scene-15-03.jpe",
            "scene-15-04.jpe"
        ]
    },

    {
        type: "images",
        chapter: "CHAPTER 04 // THE MEMORIES WE DIDN'T PLAN",
        images: [
            "scene-16-01.jpe",
            "scene-16-02.jpe",
            "scene-16-03.jpe",
            "scene-16-04.jpe",
            "scene-16-05.jpe"
        ]
    },


    /* -----------------------------------------
       CHAPTER 05
    ----------------------------------------- */

    {
        type: "video",
        chapter: "CHAPTER 05 // US",
        video: "scene-17.mp4"
    },

    {
        type: "images",
        chapter: "CHAPTER 05 // US",
        images: [
            "scene-18-01.jpe",
            "scene-18-02.jpe",
            "scene-18-03.jpe",
            "scene-18-04.jpe"
        ]
    },

    {
        type: "images",
        chapter: "CHAPTER 05 // US",
        images: [
            "scene-19-01.jpe",
            "scene-19-02.jpe",
            "scene-19-03.jpe",
            "scene-19-04.jpe",
            "scene-19-05.jpe"
        ]
    },


    /* -----------------------------------------
       CHAPTER 06
    ----------------------------------------- */

    {
        type: "video",
        chapter: "CHAPTER 06 // THE MOMENTS THAT MATTERED",
        video: "scene-20.mp4"
    },

    {
        type: "images",
        chapter: "CHAPTER 06 // THE MOMENTS THAT MATTERED",
        images: [
            "scene-21-01.jpe",
            "scene-21-02.jpe",
            "scene-21-03.jpe",
            "scene-21-04.jpe"
        ]
    },

    {
        type: "images",
        chapter: "CHAPTER 06 // THE MOMENTS THAT MATTERED",
        images: [
            "scene-22-01.jpe",
            "scene-22-02.jpe",
            "scene-22-03.jpe"
        ]
    },

    {
        type: "images",
        chapter: "CHAPTER 06 // THE MOMENTS THAT MATTERED",
        images: [
            "scene-23-01.jpe",
            "scene-23-02.jpe",
            "scene-23-03.jpe"
        ]
    },

    {
        type: "message",
        chapter: "CHAPTER 06 // THE MOMENTS THAT MATTERED",
        title: "The little things mattered.",
        text:
            "The random pictures.<br>" +
            "The stupid videos.<br>" +
            "The inside jokes.<br>" +
            "The moments nobody planned.<br><br>" +
            "Those were the things that quietly became memories."
    },

    {
        type: "images",
        chapter: "CHAPTER 06 // THE MOMENTS THAT MATTERED",
        images: [
            "scene-25-01.jpe",
            "scene-25-02.jpe",
            "scene-25-03.jpe"
        ]
    },


    /* -----------------------------------------
       CHAPTER 07
       THE PEOPLE
    ----------------------------------------- */

    {
        type: "message",
        chapter: "CHAPTER 07 // THE PEOPLE WHO MADE THIS STORY",
        title: "Fourteen people.",
        text:
            "Different personalities.<br>" +
            "Different talents.<br>" +
            "Different kinds of chaos.<br><br>" +
            "Somehow, they became one story."
    }

];


/* =========================================
   ADD FRIEND SCENES
========================================= */

friends.forEach((friend, index) => {

    scenes.push({
        type: "friend",
        chapter: "CHAPTER 07 // THE PEOPLE WHO MADE THIS STORY",
        friend: friend,
        number: index + 1
    });

});


/* =========================================
   FINAL CHAPTER
========================================= */

scenes.push(

    {
        type: "message",
        chapter: "FINAL CHAPTER // GRADUATION",
        title: "And then...",
        text:
            "The school year kept moving.<br>" +
            "Deadlines became memories.<br>" +
            "Projects became stories.<br><br>" +
            "And eventually, we reached the end of this chapter."
    },

    {
        type: "message",
        chapter: "FINAL CHAPTER // GRADUATION",
        title: "It started with projects.",
        text:
            "Somewhere between the deadlines,<br>" +
            "the chaos,<br>" +
            "the screenshots,<br>" +
            "the stupid videos,<br>" +
            "the laughter,<br>" +
            "and all the moments in between...<br><br>" +
            "we became a family."
    },

    {
        type: "message",
        chapter: "FINAL CHAPTER // GRADUATION",
        title: "Memory Core",
        text:
            "September 2025 — 2026<br><br>" +
            "Some memories disappear with time.<br>" +
            "Some stay exactly where they belong.<br><br>" +
            "This one stays here."
    },

    {
        type: "final"
    }

);


/* =========================================
   RENDER SCENES
========================================= */

function renderScenes() {

    sceneContainer.innerHTML = "";

    scenes.forEach((scene, index) => {

        const section = document.createElement("section");

        section.className = "scene";

        section.dataset.index = index;

        /* =========================
           IMAGE SCENE
        ========================== */

        if (scene.type === "images") {

            const wrapper = document.createElement("div");

            wrapper.style.width = "100%";

            const label = document.createElement("p");

            label.className = "chapter-label";

            label.textContent = scene.chapter;

            wrapper.appendChild(label);

            const grid = document.createElement("div");

            grid.className = "image-grid";

            if (scene.images.length >= 5) {
                grid.classList.add("five");
            }

            scene.images.forEach(image => {

                const img = document.createElement("img");

                img.className = "memory-image";

                img.src = `assets/images/scenes/${image}`;

                img.alt = "Memory";

                img.loading = "eager";

                grid.appendChild(img);

            });

            wrapper.appendChild(grid);

            section.appendChild(wrapper);
        }


        /* =========================
           MESSAGE SCENE
        ========================== */

        else if (scene.type === "message") {

            const wrapper = document.createElement("div");

            wrapper.className = "message-scene";

            const label = document.createElement("p");

            label.className = "chapter-label";

            label.textContent = scene.chapter;

            const title = document.createElement("h2");

            title.className = "message-title";

            title.textContent = scene.title;

            const text = document.createElement("p");

            text.className = "message-text";

            text.innerHTML = scene.text;

            wrapper.appendChild(label);

            wrapper.appendChild(title);

            wrapper.appendChild(text);

            section.appendChild(wrapper);
        }


        /* =========================
           VIDEO SCENE
        ========================== */

        else if (scene.type === "video") {

            const wrapper = document.createElement("div");

            wrapper.className = "video-container";

            const label = document.createElement("p");

            label.className = "chapter-label";

            label.textContent = scene.chapter;

            const video = document.createElement("video");

            video.className = "memory-video";

            video.src = `assets/videos/scenes/${scene.video}`;

            video.controls = true;

            video.playsInline = true;

            video.preload = "metadata";

            video.setAttribute("playsinline", "");

            wrapper.appendChild(label);

            wrapper.appendChild(video);

            section.appendChild(wrapper);

            video.addEventListener("play", () => {

                currentVideo = video;

                fadeMusic(VIDEO_VOLUME, 500);

            });

            video.addEventListener("pause", () => {

                if (!video.ended) {
                    fadeMusic(NORMAL_VOLUME, 500);
                }

            });

            video.addEventListener("ended", () => {

                fadeMusic(NORMAL_VOLUME, 800);

            });

        }


        /* =========================
           FRIEND SCENE
        ========================== */

        else if (scene.type === "friend") {

            const wrapper = document.createElement("div");

            wrapper.className = "friend-profile";

            const number = document.createElement("p");

            number.className = "friend-number";

            number.textContent =
                `PERSON ${String(scene.number).padStart(2, "0")} / 14`;

            const name = document.createElement("h2");

            name.className = "friend-name";

            name.textContent = scene.friend.name;

            const role = document.createElement("p");

            role.className = "friend-role";

            role.textContent = scene.friend.role;

            const message = document.createElement("p");

            message.className = "friend-message";

            message.textContent = scene.friend.message;

            const future = document.createElement("p");

            future.className = "friend-future";

            future.textContent = scene.friend.future;

            wrapper.appendChild(number);

            wrapper.appendChild(name);

            wrapper.appendChild(role);

            wrapper.appendChild(message);

            wrapper.appendChild(future);

            section.appendChild(wrapper);
        }


        /* =========================
           FINAL
        ========================== */

        else if (scene.type === "final") {

            const wrapper = document.createElement("div");

            wrapper.className = "final-scene";

            wrapper.innerHTML = `
                <p class="final-small">
                    MEMORY CORE // ARCHIVE COMPLETE
                </p>

                <h1 class="final-title">
                    THE END.
                </h1>

                <p class="final-text">
                    But maybe not really.
                </p>

                <p class="final-date">
                    SEPTEMBER 2025 — 2026
                </p>
            `;

            section.appendChild(wrapper);
        }


        sceneContainer.appendChild(section);

    });

}


/* =========================================
   SCENE NAVIGATION
========================================= */

let currentScene = 0;

function showScene(index) {

    if (index < 0) {
        index = 0;
    }

    if (index >= scenes.length) {
        index = scenes.length - 1;
    }

    stopCurrentVideo();

    currentScene = index;

    const allScenes =
        document.querySelectorAll(".scene");

    allScenes.forEach(scene => {
        scene.classList.remove("active");
    });

    const activeScene =
        document.querySelector(
            `.scene[data-index="${currentScene}"]`
        );

    if (activeScene) {
        activeScene.classList.add("active");
    }

    sceneCounter.textContent =
        `${String(currentScene + 1).padStart(2, "0")} / ${String(scenes.length).padStart(2, "0")}`;

    backButton.disabled =
        currentScene === 0;

    nextButton.disabled =
        currentScene === scenes.length - 1;

    fadeMusic(NORMAL_VOLUME, 500);
}


/* =========================================
   VIDEO CONTROL
========================================= */

function stopCurrentVideo() {

    const videos =
        document.querySelectorAll(".memory-video");

    videos.forEach(video => {

        if (!video.paused) {
            video.pause();
        }

        video.currentTime = 0;

    });

    currentVideo = null;
}


/* =========================================
   MUSIC FADE
========================================= */

function fadeMusic(targetVolume, duration = 500) {

    clearInterval(fadeInterval);

    const startVolume = mainMusic.volume;

    const difference = targetVolume - startVolume;

    const steps = Math.max(
        1,
        Math.floor(duration / 25)
    );

    let step = 0;

    fadeInterval = setInterval(() => {

        step++;

        mainMusic.volume =
            startVolume +
            difference * (step / steps);

        if (step >= steps) {

            mainMusic.volume = targetVolume;

            clearInterval(fadeInterval);

        }

    }, 25);
}


/* =========================================
   UNLOCK
========================================= */

async function unlockMemory() {

    const answer =
        answerInput.value
            .trim()
            .toLowerCase();

    if (answer !== "september") {

        wrongAnswer.textContent =
            "Not quite... try again.";

        answerInput.classList.add("shake");

        setTimeout(() => {
            answerInput.classList.remove("shake");
        }, 400);

        return;
    }

    wrongAnswer.textContent = "";

    /*
        IMPORTANT:
        Music starts HERE because this function
        is triggered by the user's click.
    */

    mainMusic.volume = NORMAL_VOLUME;

    try {

        await mainMusic.play();

        musicPlaying = true;

        musicButton.textContent = "♫";

    } catch (error) {

        console.log(
            "Music could not start automatically:",
            error
        );

    }

    lockScreen.classList.remove("active");

    setTimeout(() => {

        lockScreen.style.display = "none";

        story.classList.remove("hidden");

        renderScenes();

        showScene(0);

    }, 500);
}


/* =========================================
   MUSIC TOGGLE
========================================= */

musicButton.addEventListener("click", () => {

    if (mainMusic.paused) {

        mainMusic.play()
            .then(() => {

                musicPlaying = true;

                mainMusic.volume = NORMAL_VOLUME;

                musicButton.textContent = "♫";

            })
            .catch(error => {

                console.log(error);

            });

    } else {

        mainMusic.pause();

        musicPlaying = false;

        musicButton.textContent = "🔇";
    }

});


/* =========================================
   BUTTONS
========================================= */

unlockButton.addEventListener(
    "click",
    unlockMemory
);

nextButton.addEventListener(
    "click",
    () => {

        if (currentScene < scenes.length - 1) {

            showScene(currentScene + 1);

        }

    }
);

backButton.addEventListener(
    "click",
    () => {

        if (currentScene > 0) {

            showScene(currentScene - 1);

        }

    }
);


/* =========================================
   ENTER KEY
========================================= */

answerInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            unlockMemory();

        }

    }
);


/* =========================================
   KEYBOARD NAVIGATION
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (story.classList.contains("hidden")) {
            return;
        }

        if (event.key === "ArrowRight") {

            if (currentScene < scenes.length - 1) {
                showScene(currentScene + 1);
            }

        }

        if (event.key === "ArrowLeft") {

            if (currentScene > 0) {
                showScene(currentScene - 1);
            }

        }

    }
);


/* =========================================
   INITIAL STATE
========================================= */

mainMusic.volume = NORMAL_VOLUME;

backButton.disabled = true;
