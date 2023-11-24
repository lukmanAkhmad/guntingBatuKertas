function game() {
    let pScore = 0;
    let kScore = 0;
    let seri = 0;
    let roundWinner = " ";

    
    function coba(){
      if(pScore === 5 || kScore === 5){
        btnG.disabled = true;
        btnB.disabled = true;
        btnK.disabled = true;
      };

      // Mengembalikan nilai ke roundWinner
      if (pScore > kScore) {
        roundWinner = "Player Menang";
      } else if (kScore > pScore) {
        roundWinner = "Komputer Menang";
      } else {
        roundWinner = "Hasil Imbang";
      }
    };

    
    
    
    
    // Pilihan Komputer
    function getComputerChoice() {
      const senjata = ["gunting", "batu", "kertas"];
      const acak = Math.floor(Math.random() * senjata.length);
      return senjata[acak];
    };
    
    // Button
    const btnG = document.querySelector("#btnG");
    const btnB = document.querySelector("#btnB");
    const btnK = document.querySelector("#btnK");

    btnG.addEventListener('click', () => playRound("gunting"));
    btnB.addEventListener('click', () => playRound("batu"));
    btnK.addEventListener('click', () => playRound("kertas"));

    function playRound(playerSelection){
      let computerSelection = getComputerChoice();

      console.log("Pilihan Komputer : " + computerSelection);
      console.log("Pilihan Pemain :" + playerSelection);

        // Cek Imbang
      if (playerSelection === computerSelection) {
        seri++;
    
      } else if (
        (playerSelection === "gunting" && computerSelection === "batu") ||
        (playerSelection === "batu" && computerSelection === "kertas") ||
        (playerSelection === "kertas" && computerSelection === "gunting")
      ) {
        kScore++;

      } else {
        pScore++;
      };

      // ditaro di sini biar sesuai sama score !!!
      coba();

    //   Memunculkan ke element div
      const selectionComputer = document.querySelector("#computerSelection");
      const scorePlayer = document.querySelector("#playerScore");
      const scoreKomputer = document.querySelector("#komputerScore");
      const imbangJumlah = document.querySelector("#jumlahImbang");
      const winnerRound = document.querySelector("#roundWinner")

      selectionComputer.textContent = `Pilihan Komputer : ${computerSelection}`;
      scorePlayer.textContent = `Score Player : ${pScore}`;
      scoreKomputer.textContent = `Score Komputer : ${kScore}`;
      imbangJumlah.textContent = `Jumlah Imbang : ${seri}`;
      winnerRound.textContent = `Pemenangnya adalah : ${roundWinner}`

      

      
    };
      
    
}
game();

    //   //Memanggil variabel ke konsol
    //   console.log("Player Menang :" + pScore + " Kali");
    //   console.log("Komputer Menang :" + kScore + " Kali");
    //   console.log("Jumlah Imbang :" + seri + " Kali");
    //   console.log(roundWinner);
      
    //   // Mengembalikan nilai ke roundWinner
    // if (pScore > kScore) {
    //   roundWinner = "Player Menang";
    // } else if (kScore > pScore) {
    //   roundWinner = "Komputer Menang";
    // } else {
    //   roundWinner = "Hasil Imbang";
    // }