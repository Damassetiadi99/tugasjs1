
const mtk = 50
const bahasaIndonesia = 60
const bahasaInggris = 70
const ipa = 80

function hitung() {
    let average = ((mtk + bahasaIndonesia + bahasaInggris + ipa ) / 4)
    console.log(average)
    if (average > 90 && average <= 100) {
        grade = 'A'
    } else if (average > 80 && average <=89) {
        grade = 'B'
    } else if (average > 70 && average <=79) {
        grade = 'C'
    } else if (average > 60 && average <=69) {
        grade = 'D'
    } else if (average < 60 && average >=0 ) {
        grade = 'E'
    }
    
     console.log(grade)   
   
}
hitung()
