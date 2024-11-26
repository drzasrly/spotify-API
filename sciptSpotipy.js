import express from 'express';
import open from 'open';
import SpotifyWebApi from 'spotify-web-api-node';
import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

// Spotify API Configuration
const spotifyApi = new SpotifyWebApi({
    clientId: "9ee59620f9cf44fb823d4a50a53815d6",
    clientSecret: "fdf7210982164dcc88cab19da768cb48",
    redirectUri: "http://localhost:9090/callback",
});

// Authorization URL Scopes
const scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "streaming",
];

// Authorization Flow
const app = express();
app.get("/callback", (req, res) => {
    const code = req.query.code || null;

    spotifyApi
        .authorizationCodeGrant(code)
        .then((data) => {
            spotifyApi.setAccessToken(data.body["access_token"]);
            spotifyApi.setRefreshToken(data.body["refresh_token"]);
            console.log("Login berhasil! Token akses telah disimpan.");
            res.send("Login berhasil! Silakan kembali ke terminal Anda.");
            main();
        })
        .catch((err) => {
            console.error("Error during authorization:", err);
            res.send("Gagal login. Cek console untuk detail.");
        });
});

// Buka browser untuk login
const authorizeURL = spotifyApi.createAuthorizeURL(scopes);
console.log("Buka URL berikut untuk login ke Spotify:");
console.log(authorizeURL);
open(authorizeURL);

// Jalankan server untuk menangani callback
app.listen(9090, () => {
    console.log("Server berjalan di http://localhost:9090");
});


class Node {
    constructor(question, yesNode = null, noNode = null, diagnosis = null) {
        this.question = question;
        this.yesNode = yesNode;
        this.noNode = noNode;
        this.diagnosis = diagnosis;
    }
}

function buildTree() {
    const node37 = new Node(null, null, null, {
        song: "Rhoma Irama - Begadang",
        link: "https://open.spotify.com/track/5TFBJunwkbdRjnUzKaZeJt",
    });
    const node36 = new Node(null, null, null, {
        song: "Mansur S - Rembulan Bersinar Lagi",
        link: "https://open.spotify.com/track/3tGw3HmpTuOVGGv4hAIRi5",
    });
    const node35 = new Node(null, null, null, { message: "Cobalah dengarkan genre musik lainnya" });
    const node34 = new Node("Apakah anda suka dangdut religius?", node36, node37);
    const node33 = new Node(null, null, null, {
        song: "Ndarboy Genk - Mendung Tanpo Udan",
        link: "https://open.spotify.com/track/0Z54rUZ81Vn0qphFR3jXUb",
    });
    const node32 = new Node(null, null, null, {
        song: "Via Vallen - Sayang",
        link: "https://open.spotify.com/track/2DS8YXttgkleTop6REApdY",
    });
    const node31 = new Node(null, null, null, "Beristirahtalah, semoga lekas membaik moodmu");
    const node30 = new Node(null, null, null, {
        song: "Surfaces - Sunday Best",
        link: "https: //open.spotify.com/track/1qYKWcEOrh2tM8PlgIm8K1",
    });
    const node29 = new Node(null, null, null, {
        song: "Tiara Andini - Kupu-Kupu",
        link: "https: //open.spotify.com/track/1PuhA9UXgH4wRnXzYk5S2Z",
    });
    const node28 = new Node(null, null, null, {
        song: "Pharrell Williams - Happy",
        link: "https: //open.spotify.com/track/6NPVjNh8Jhru9xOmyQigds",
    });
    const node27 = new Node("Apakah anda suka dangdut klasik?", node34, node35);
    const node26 = new Node("Apakah anda sedang bersantai?", node32, node33);
    const node25 = new Node(null, null, null, {
        song: "The Beatles - Yesterday",
        link: "https: //open.spotify.com/track/3BQHpFgAp4l80e1XslIjNI",
    });
    const node24 = new Node(null, null, null, {
        song: "Eric Clapton - Wonderful Tonight ",
        link: "https: //open.spotify.com/track/6zC0mpGYwbNTpk9SKwh08f?",
    });
    const node23 = new Node(null, null, null, {
        song: "Public Enemy - Fight The Power",
        link: "https: //open.spotify.com/track/1yo16b3u0lptm6Cs7lx4AD",
    });
    const node22 = new Node(null, null, null, {
        song: "Green Day - American Idiot",
        link: "https: //open.spotify.com/track/6nTiIhLmQ3FWhvrGafw2zj",
    });
    const node21 = new Node(null, null, null, {
        song: "Jessi - Zoom",
        link: "https: //open.spotify.com/track/4IaxDf2FixiQXq0mW7key9",
    });

    const node20 = new Node(null, null, null, {
        song: "Big Bang - Bang Bang Bang",
        link: "https: //open.spotify.com/track/3dI59jLoFMjMAyUAyRZnkE"
    });
    const node19 = new Node(null, null, null, "Baiklah, anda sepertinya butuh istirahat");
    const node18 = new Node(null, null, null, {
        song: "Yura Yunita - Dunia Tipu-Tipu",
        link: "https: //open.spotify.com/track/0mMqopQJOWADJSPRMYkvTF"
    });
    const node17 = new Node("Apakah anda ingin lagu yang berirama santai?", node30, node31);
    const node16 = new Node("Apakah anda ingin mendengarkan lagu barat?", node28, node29);
    const node15 = new Node(null, null, null, "Beristirahatlah");
    const node14 = new Node("Apakah anda suka dangdut modern?", node26, node27);
    const node13 = new Node("Apakah anda sedang jatuh cinta?", node24, node25);
    const node12 = new Node("Apakah mood anda sedang buruk?", node22, node23);
    const node11 = new Node(null, null, null, "Anda tidak suka musik POP");
    const node10 = new Node("Apakah anda suka lagu yang powerful?", node20, node21);
    const node9 = new Node("Apakah anda ingin mendengarkan lagu yang bisa menenangkan perasaan anda?", node18, node19);
    const node8 = new Node("Apakah anda ingin mendengarkan lagu yang ceria dan penuh semangat?", node16, node17);
    const node7 = new Node("Apakah anda suka dangdut?", node14, node15);
    const node6 = new Node("Apakah kamu suka lagu rock bernuansa sosial?", node12, node13);
    const node5 = new Node("Apakah anda suka kpop?", node10, node11);
    const node4 = new Node("Apakah mood anda hari ini bahagia?", node8, node9);
    const node3 = new Node("Apakah anda suka musik folk?", node6, node7);
    const node2 = new Node("Apakah anda suka musik rnb?", node4, node5);
    const node1 = new Node("Apakah anda suka genre pop?", node2, node3);

    return node1;
}

// Fungsi untuk memutar lagu di Spotify
function playSong(link) {
    const uri = link.split("/track/")[1].split("?")[0];
    spotifyApi.getMyDevices().then((response) => {
        const devices = response.body.devices;
        if (devices.length === 0) {
            console.log("Tidak ada perangkat Spotify aktif. Pastikan perangkat aktif.");
            return;
        }
        const deviceId = devices[0].id;
        spotifyApi
            .play({
                device_id: deviceId,
                uris: [`spotify:track:${uri}`],
            })
            .then(() => {
                console.log("Lagu diputar di Spotify!");
            })
            .catch((error) => {
                console.error("Error memutar lagu:", error.message);
            });
    });
}

// Fungsi rekursif untuk diagnosa
function diagnoseSymptoms(node) {
    if (!node) return;

    if (node.diagnosis) {
        if (node.diagnosis.song) {
            console.log(`Rekomendasi Lagu: ${node.diagnosis.song}`);
            console.log(`Link: ${node.diagnosis.link}`);
            playSong(node.diagnosis.link);
        } else if (node.diagnosis.message) {
            console.log(node.diagnosis.message);
        }
        return;
    }

    const answer = prompt(`${node.question} (yes/no): `).toLowerCase();
    if (answer === "yes") {
        diagnoseSymptoms(node.yesNode);
    } else if (answer === "no") {
        diagnoseSymptoms(node.noNode);
    } else {
        console.log("Input tidak valid. Silakan jawab dengan 'yes' atau 'no'.");
        diagnoseSymptoms(node);
    }
}

function main() {
    console.log("Selamat datang di Sistem Rekomendasi Musik!");
    const root = buildTree();
    diagnoseSymptoms(root);
}