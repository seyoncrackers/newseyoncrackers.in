const productGroups = [
    {
      name: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)",
      products: [
            { id: 1, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '3.5inch LAKSHMI (3.5 இன்ச் லட்சுமி)', per: "PKT", price: 75, offerRate: 15 },
      { id: 2, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '2.75inch KURUVI (2.75 இன்ச் குருவி)', per: "PKT", price: 50, offerRate: 10 },
      { id: 3, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '4inch LAKSHMI (4 இன்ச் லட்சுமி)', per: "PKT", price: 110, offerRate: 22 },
      { id: 4, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '4inch GOLD LAKSHMI (4 இன்ச் கோல்டு லட்சுமி)', per: "PKT", price: 120, offerRate: 24 },
      { id: 5, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '4inch DELUXE LAKSHMI (4 இன்ச் டீலக்ஸ் லட்சுமி)', per: "PKT", price: 180, offerRate: 36 },
      { id: 6, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '5inch LAKSHMI (5 இன்ச் லட்சுமி)', per: "PKT", price: 220, offerRate: 44 },
      { id: 7, category: "ONE SOUND CRACKERS (ஒற்றைச் சத்துப் பட்டாசுகள்)", name: '6inch LAKSHMI (6 இன்ச் லட்சுமி)', per: "PKT", price: 250, offerRate: 50 }
      ]
    },
    {
      name: "SPARKLERS (மத்தாப்புகள்)",
      products: [
        { id: 8, category: "SPARKLERS (மத்தாப்புகள்)", name: "7CM Electric (7 செ.மீ மின் மத்தாப்பு)", per: "BOX", price: 65, offerRate: 13 },
        { id: 9, category: "SPARKLERS (மத்தாப்புகள்)", name: "7CM Crackling (7 செ.மீ சத்தம் தரும் மத்தாப்பு)", per: "BOX", price: 70, offerRate: 14 },
        { id: 10, category: "SPARKLERS (மத்தாப்புகள்)", name: "7CM Green (7 செ.மீ பச்சை மத்தாப்பு)", per: "BOX", price: 80, offerRate: 16 },
        { id: 11, category: "SPARKLERS (மத்தாப்புகள்)", name: "7CM Red (7 செ.மீ சிவப்பு மத்தாப்பு)", per: "BOX", price: 95, offerRate: 19 },
        { id: 12, category: "SPARKLERS (மத்தாப்புகள்)", name: "10CM Electric (10 செ.மீ மின் மத்தாப்பு)", per: "BOX", price: 115, offerRate: 23 },
        { id: 13, category: "SPARKLERS (மத்தாப்புகள்)", name: "10CM Crackling (10 செ.மீ சத்தம் தரும் மத்தாப்பு)", per: "BOX", price: 130, offerRate: 26 },
        { id: 14, category: "SPARKLERS (மத்தாப்புகள்)", name: "10CM Green (10 செ.மீ பச்சை மத்தாப்பு)", per: "BOX", price: 136, offerRate: 27 },
        { id: 15, category: "SPARKLERS (மத்தாப்புகள்)", name: "10CM Red (10 செ.மீ சிவப்பு மத்தாப்பு)", per: "BOX", price: 146, offerRate: 29 },
        { id: 16, category: "SPARKLERS (மத்தாப்புகள்)", name: "15CM Electric (15 செ.மீ மின் மத்தாப்பு)", per: "BOX", price: 240, offerRate: 48 },
        { id: 17, category: "SPARKLERS (மத்தாப்புகள்)", name: "15CM Crackling (15 செ.மீ சத்தம் தரும் மத்தாப்பு)", per: "BOX", price: 250, offerRate: 50 },
        { id: 18, category: "SPARKLERS (மத்தாப்புகள்)", name: "15CM Green (15 செ.மீ பச்சை மத்தாப்பு)", per: "BOX", price: 280, offerRate: 56 },
        { id: 19, category: "SPARKLERS (மத்தாப்புகள்)", name: "15CM Red (15 செ.மீ சிவப்பு மத்தாப்பு)", per: "BOX", price: 300, offerRate: 60 },
        { id: 20, category: "SPARKLERS (மத்தாப்புகள்)", name: "30CM Electric (30 செ.மீ மின் மத்தாப்பு)", per: "BOX", price: 240, offerRate: 48 },
        { id: 21, category: "SPARKLERS (மத்தாப்புகள்)", name: "30CM Crackling (30 செ.மீ சத்தம் தரும் மத்தாப்பு)", per: "BOX", price: 250, offerRate: 50 },
        { id: 22, category: "SPARKLERS (மத்தாப்புகள்)", name: "30CM Green (30 செ.மீ பச்சை மத்தாப்பு)", per: "BOX", price: 280, offerRate: 56 },
        { id: 23, category: "SPARKLERS (மத்தாப்புகள்)", name: "30CM Red (30 செ.மீ சிவப்பு மத்தாப்பு)", per: "BOX", price: 300, offerRate: 60 },
        { id: 24, category: "SPARKLERS (மத்தாப்புகள்)", name: "50CM Electric (50 செ.மீ மின் மத்தாப்பு)", per: "BOX", price: 1100, offerRate: 220 }
      ]
    },
    {
      name: "SPECIAL SPARKLERS (சிறப்பு மத்தாப்புகள்)",
      products: [
        { id: 25, category: "SPECIAL SPARKLERS (சிறப்பு மத்தாப்புகள்)", name: "ROTATING SPARKLERS (சுழலும் மத்தாப்புகள்)", per: "BOX", price: 1250, offerRate: 250 }
      ]
    },
    {
      name: "BOMBS (வெடிகள்)",
      products: [
        { id: 26, category: "BOMBS (வெடிகள்)", name: "HYDRO (ஹைட்ரோ வெடி)", per: "BOX", price: 425, offerRate: 85 },
      { id: 27, category: "BOMBS (வெடிகள்)", name: "KING (கிங் வெடி)", per: "BOX", price: 500, offerRate: 100 },
      { id: 28, category: "BOMBS (வெடிகள்)", name: "CLASSIC (கிளாசிக் வெடி)", per: "BOX", price: 625, offerRate: 125 },
      { id: 29, category: "BOMBS (வெடிகள்)", name: "AGNI/DIGITAL BOMB (அக்னி / டிஜிட்டல் வெடி)", per: "BOX", price: 1250, offerRate: 250 },
      ]
    },
    {
      name: "BIJILI (பிஜிலி வெடிகள்)",
      products: [
       { id: 30, category: "BIJILI (பிஜிலி வெடிகள்)", name: "RED BIJILI (சிவப்பு பிஜிலி)", per: "PKT", price: 200, offerRate: 40 },
      { id: 31, category: "BIJILI (பிஜிலி வெடிகள்)", name: "STRIPPED BIJILI (ஸ்ட்ரிப்ப்ட் பிஜிலி)", per: "PKT", price: 220, offerRate: 44 }
      ]
    },
    {
      name: "PAPER BOMB (பேப்பர் வெடிகள்)",
      products: [
         { id: 32, category: "PAPER BOMB (பேப்பர் வெடிகள்)", name: "1/4 KG ADIYAL (கால் கிலோ அடியல்)", per: "BOX", price: 250, offerRate: 50 },
      { id: 33, category: "PAPER BOMB (பேப்பர் வெடிகள்)", name: "1/2 KG ADIYAL (அரை கிலோ அடியல்)", per: "BOX", price: 500, offerRate: 100 },
      { id: 34, category: "PAPER BOMB (பேப்பர் வெடிகள்)", name: "1 KG ADIYAL (ஒரு கிலோ அடியல்)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 35, category: "PAPER BOMB (பேப்பர் வெடிகள்)", name: "MONEY BANK PAPER BOMB (மணி பேங்க் பேப்பர் வெடி)", per: "BOX", price: 700, offerRate: 140 }
      ]
    },
    {
      name: "FLOWER POTS (பூந்தொட்டிகள்)",
      products: [
        { id: 36, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS BIG (A GRADE) (பெரிய பூந்தொட்டி A தரம்)", per: "BOX", price: 450, offerRate: 90 },
      { id: 37, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS BIG (B GRADE) (பெரிய பூந்தொட்டி B தரம்)", per: "BOX", price: 350, offerRate: 70 },
      { id: 38, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS SPECIAL (A GRADE) (சிறப்பு பூந்தொட்டி A தரம்)", per: "BOX", price: 550, offerRate: 110 },
      { id: 39, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS SPECIAL (B GRADE) (சிறப்பு பூந்தொட்டி B தரம்)", per: "BOX", price: 450, offerRate: 90 },
      { id: 40, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS ASOKA (A GRADE) (அசோகா பூந்தொட்டி A தரம்)", per: "BOX", price: 850, offerRate: 170 },
      { id: 41, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS ASOKA (B GRADE) (அசோகா பூந்தொட்டி B தரம்)", per: "BOX", price: 650, offerRate: 130 },
      { id: 42, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "COLOR KOTTI (A GRADE) (கலர் கொட்டி A தரம்)", per: "BOX", price: 1260, offerRate: 252 },
      { id: 43, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "COLOR KOTTI (B GRADE) (கலர் கொட்டி B தரம்)", per: "BOX", price: 1100, offerRate: 220 },
      { id: 44, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "COLOR KOTTI MEGA (மெகா கலர் கொட்டி)", per: "BOX", price: 1375, offerRate: 275 },
      { id: 45, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "FLOWER POTS DELUXE (5 PCS) (டீலக்ஸ் பூந்தொட்டி 5 துண்டுகள்)", per: "BOX", price: 1300, offerRate: 260 },
      { id: 46, category: "FLOWER POTS (பூந்தொட்டிகள்)", name: "LUCKY (RED & GREEN) (லக்கி சிவப்பு மற்றும் பச்சை)", per: "BOX", price: 950, offerRate: 190 }
      ]
    },
    {
      name: "GROUND CHAKKARS (தரையில் சுழலும் சக்கரங்கள்)",
      products: [
       { id: 47, category: "GROUND CHAKKARS (தரையில் சுழலும் சக்கரங்கள்)", name: "GROUND CHAKKAR BIG (பெரிய தரைச் சக்கரம்)", per: "BOX", price: 270, offerRate: 54 },
      { id: 48, category: "GROUND CHAKKARS (தரையில் சுழலும் சக்கரங்கள்)", name: "GROUND CHAKKAR SPECIAL (சிறப்பு தரைச் சக்கரம்)", per: "BOX", price: 460, offerRate: 92 },
      { id: 49, category: "GROUND CHAKKARS (தரையில் சுழலும் சக்கரங்கள்)", name: "GROUND CHAKKAR DELUXE (டீலக்ஸ் தரைச் சக்கரம்)", per: "BOX", price: 720, offerRate: 144 }
      ]
    },
    {
      name: "FANCY CHAKKARS (ஃபேன்சி சக்கரங்கள்)",
      products: [
         { id: 50, category: "FANCY CHAKKARS (ஃபேன்சி சக்கரங்கள்)", name: "4X4 (4x4 ஃபேன்சி சக்கரம்)", per: "BOX", price: 800, offerRate: 160 },
      { id: 51, category: "FANCY CHAKKARS (ஃபேன்சி சக்கரங்கள்)", name: "WHISTLING CHAKKAR (விசில் சக்கரம்)", per: "BOX", price: 600, offerRate: 120 },
      { id: 52, category: "FANCY CHAKKARS (ஃபேன்சி சக்கரங்கள்)", name: "PLANET WHEELING (பிளானெட் வீலிங் சக்கரம்)", per: "BOX", price: 1750, offerRate: 350 },
      { id: 53, category: "FANCY CHAKKARS (ஃபேன்சி சக்கரங்கள்)", name: "NINJA CHAKKAR AYYAN (நிஞ்ஜா அய்யன் சக்கரம்)", per: "BOX", price: 850, offerRate: 170 }
      ]
    },
    {
      name: "TWINKLING STARS (மின்னும் நட்சத்திரங்கள்)",
      products: [
       { id: 54, category: "TWINKLING STARS (மின்னும் நட்சத்திரங்கள்)", name: '1.5inch TW STAR (1.5 இன்ச் ட்விங்கிள் ஸ்டார்)', per: "BOX", price: 150, offerRate: 30 },
      { id: 55, category: "TWINKLING STARS (மின்னும் நட்சத்திரங்கள்)", name: '4inch TW STAR (4 இன்ச் ட்விங்கிள் ஸ்டார்)', per: "BOX", price: 400, offerRate: 80 }
      ]
    },
    {
      name: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)",
      products: [
        { id: 56, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "PHOTO FLASH (போட்டோ ஃபிளாஷ்)", per: "BOX", price: 500, offerRate: 100 },
      { id: 57, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "BAMBARAM (பம்பரம்)", per: "BOX", price: 550, offerRate: 110 },
      { id: 58, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "BUTTERFLY (பட்டாம்பூச்சி)", per: "BOX", price: 500, offerRate: 100 },
      { id: 59, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "KITKAT (கிட்கேட்)", per: "BOX", price: 200, offerRate: 40 },
      { id: 60, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "MAGIC POPS (மேஜிக் பாப்ஸ்)", per: "BOX", price: 150, offerRate: 30 },
      { id: 61, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "CARTOONS (கார்ட்டூன்ஸ்)", per: "BOX", price: 150, offerRate: 30 },
      { id: 62, category: "CHILDRENS SPECIAL (குழந்தைகளுக்கான சிறப்பு பட்டாசுகள்)", name: "SNAKE TABLETS (பாம்பு மாத்திரைகள்)", per: "BOX", price: 150, offerRate: 30 }
      ]
    },
    {
      name: "SMOKE CRACKERS (புகை பட்டாசுகள்)",
      products: [
        { id: 63, category: "SMOKE CRACKERS (புகை பட்டாசுகள்)", name: "RAINBOW SMOKE (ரெயின்போ புகை)", per: "BOX", price: 550, offerRate: 110 },
      { id: 64, category: "SMOKE CRACKERS (புகை பட்டாசுகள்)", name: '4inch HOLI SMOKE (4 இன்ச் ஹோலி புகை)', per: "BOX", price: 1000, offerRate: 200 },
      { id: 65, category: "SMOKE CRACKERS (புகை பட்டாசுகள்)", name: "PEACOCK SMOKE (மயில் புகை)", per: "BOX", price: 1250, offerRate: 250 },
      { id: 66, category: "SMOKE CRACKERS (புகை பட்டாசுகள்)", name: "15 SHOT SKY SMOKE SHOT (15 ஷாட் வானப் புகை)", per: "BOX", price: 2750, offerRate: 550 }
      ]
    },
    {
      name: "FANCY CANDLES & PENCILS  (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)",
      products: [
        { id: 67, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "POPCORN CANDLES (பாப்கார்ன் மெழுகுவர்த்தி)", per: "BOX", price: 1350, offerRate: 270 },
      { id: 68, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "WATERFALL CANDLES (நீர்வீழ்ச்சி மெழுகுவர்த்தி)", per: "BOX", price: 1350, offerRate: 270 },
      { id: 69, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "SWORD (வாள்)", per: "BOX", price: 600, offerRate: 120 },
      { id: 70, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "BAT (பேட்)", per: "BOX", price: 1300, offerRate: 260 },
      { id: 71, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "VELLUM MAYILUM (வேலும் மயிலும்)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 72, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "LOLLI POP (லாலிபாப்)", per: "BOX", price: 800, offerRate: 160 },
      { id: 73, category: "FANCY CANDLES & PENCILS (ஃபேன்சி மெழுகுவர்த்தி மற்றும் பென்சில்கள்)", name: "SELFIE STICKS (செல்ஃபி ஸ்டிக்ஸ்)", per: "BOX", price: 850, offerRate: 170 }
      ]
    },
    {
      name: "ROCKETS & HELICOPTERS (ராக்கெட்டுகள் மற்றும் ஹெலிகாப்டர்கள்)",
      products: [
         { id: 74, category: "ROCKETS & HELICOPTERS (ராக்கெட்டுகள் மற்றும் ஹெலிகாப்டர்கள்)", name: "HELICOPTER (ஹெலிகாப்டர்)", per: "BOX", price: 550, offerRate: 110 },
      { id: 75, category: "ROCKETS & HELICOPTERS (ராக்கெட்டுகள் மற்றும் ஹெலிகாப்டர்கள்)", name: "DRONE (ட்ரோன்)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 76, category: "ROCKETS & HELICOPTERS (ராக்கெட்டுகள் மற்றும் ஹெலிகாப்டர்கள்)", name: "LUNIK ROCKET (லூனிக் ராக்கெட்)", per: "BOX", price: 0, offerRate: 0, outOfStock: true },
      { id: 77, category: "ROCKETS & HELICOPTERS (ராக்கெட்டுகள் மற்றும் ஹெலிகாப்டர்கள்)", name: "WHISTLING ROCKET (விசில் ராக்கெட்)", per: "BOX", price: 750, offerRate: 150 }
      ]
    },
    {
      name: "SIREN FOUNTAIN (சைரன் நீரூற்று)",
      products: [
        { id: 78, category: "SIREN FOUNTAIN (சைரன் நீரூற்று)", name: "MINI SIREN (மினி சைரன்)", per: "BOX", price: 875, offerRate: 175 },
      { id: 79, category: "SIREN FOUNTAIN (சைரன் நீரூற்று)", name: "MEGA SIREN 3PCS (மெகா சைரன் 3 துண்டுகள்)", per: "BOX", price: 1125, offerRate: 225 }
      ]
    },
    {
      name: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)",
      products: [
        { id: 80, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "DISCO SHOWER (டிஸ்கோ ஷவர்)", per: "BOX", price: 625, offerRate: 125 },
      { id: 81, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "COLOUR RAIN (வண்ண மழை)", per: "BOX", price: 625, offerRate: 125 },
      { id: 82, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "SILVER RAIN (வெள்ளி மழை)", per: "BOX", price: 625, offerRate: 125 },
      { id: 83, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "GOLDEN SPARROW (தங்கச் சிட்டுக்குருவி)", per: "BOX", price: 625, offerRate: 125 },
      { id: 84, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "PEACOCK FEATHER (மயில் இறகு)", per: "BOX", price: 725, offerRate: 145 },
      { id: 85, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "TRICOLOR FOUNTAIN (மூவர்ண நீரூற்று)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 86, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "GOLD FEAST (2 COLOURS) (தங்க விருந்து 2 நிறங்கள்)", per: "BOX", price: 1225, offerRate: 245 },
      { id: 87, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "TWIN TONE (2 COLOURS) (இரட்டை நிறம்)", per: "BOX", price: 1225, offerRate: 245 },
      { id: 88, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "TROLLS (2 COLOURS) (ட்ரோல்ஸ் 2 நிறங்கள்)", per: "BOX", price: 1225, offerRate: 245 },
      { id: 89, category: "NIGHT FANCY SHOWERS (இரவு ஃபேன்சி ஷவர்ஸ்)", name: "KING FISH (2 COLOURS) (கிங் ஃபிஷ் 2 நிறங்கள்)", per: "BOX", price: 1225, offerRate: 245 }
      ]
    },
    {
      name: "AYYAN BRAND FANCY SHOWERS (அய்யன் பிராண்ட் ஃபேன்சி ஷவர்ஸ்)",
      products: [
        { id: 90, category: "AYYAN BRAND FANCY SHOWERS (அய்யன் பிராண்ட் ஃபேன்சி ஷவர்ஸ்)", name: "LITTLE DOVE (சிறிய புறா)", per: "BOX", price: 425, offerRate: 85 },
      { id: 91, category: "AYYAN BRAND FANCY SHOWERS (அய்யன் பிராண்ட் ஃபேன்சி ஷவர்ஸ்)", name: "NANO FOUNTAIN (நானோ நீரூற்று)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 92, category: "AYYAN BRAND FANCY SHOWERS (அய்யன் பிராண்ட் ஃபேன்சி ஷவர்ஸ்)", name: "SUPER STAR (சூப்பர் ஸ்டார்)", per: "BOX", price: 925, offerRate: 185 },
      { id: 93, category: "AYYAN BRAND FANCY SHOWERS (அய்யன் பிராண்ட் ஃபேன்சி ஷவர்ஸ்)", name: "LEMON TREE (லெமன் ட்ரீ)", per: "BOX", price: 925, offerRate: 185 }
      ]
    },
    {
      name: "MEGA FANCY SHOWERS (மெகா ஃபேன்சி ஷவர்ஸ்)",
      products: [
        { id: 94, category: "MEGA FANCY SHOWERS (மெகா ஃபேன்சி ஷவர்ஸ்)", name: "BUNNY AYYAN BRAND (பன்னி அய்யன் பிராண்ட்)", per: "BOX", price: 3300, offerRate: 660 },
      { id: 95, category: "MEGA FANCY SHOWERS (மெகா ஃபேன்சி ஷவர்ஸ்)", name: "VOLCANO (எரிமலை)", per: "BOX", price: 2000, offerRate: 400 }
      ]
    },
    {
      name: "TIN SHOWERS (டின் ஷவர்ஸ்)",
      products: [
        { id: 96, category: "TIN SHOWERS (டின் ஷவர்ஸ்)", name: '4inch TIN SHOWER (4 இன்ச் டின் ஷவர்)', per: "BOX", price: 600, offerRate: 120 },
      { id: 97, category: "TIN SHOWERS (டின் ஷவர்ஸ்)", name: '6inch TIN SHOWER (6 இன்ச் டின் ஷவர்)', per: "BOX", price: 800, offerRate: 160 },
      { id: 98, category: "TIN SHOWERS (டின் ஷவர்ஸ்)", name: "JOLLY BOBBY (ஜாலி பாபி)", per: "BOX", price: 1100, offerRate: 220 }
      ]
    },
    {
      name: "FOUNTAIN WITH SKY SHOT (வான்வெடி கொண்ட நீரூற்று)",
      products: [
        { id: 99, category: "FOUNTAIN WITH SKY SHOT (வான்வெடி கொண்ட நீரூற்று)", name: "TIMMY TOMMY (டிம்மி டாமி)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 100, category: "FOUNTAIN WITH SKY SHOT (வான்வெடி கொண்ட நீரூற்று)", name: "JOLU BOLU (ஜோலு போலு)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 101, category: "FOUNTAIN WITH SKY SHOT (வான்வெடி கொண்ட நீரூற்று)", name: "JUBLY BUBLY (ஜூப்ளி பப்ளி)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 102, category: "FOUNTAIN WITH SKY SHOT (வான்வெடி கொண்ட நீரூற்று)", name: "RAIN SHINE (ரெயின் ஷைன்)", per: "BOX", price: 1500, offerRate: 300 }
      ]
    },
    {
      name: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)",
      products: [
         { id: 103, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '0.75inch PENTA (5 PCS) (0.75 இன்ச் பென்டா 5 துண்டுகள்)', per: "BOX", price: 1100, offerRate: 220 },
      { id: 104, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '0.75inch MOJO CRACKLING (5 PCS) (0.75 இன்ச் மோஜோ கிராக்கிளிங் 5 துண்டுகள்)', per: "BOX", price: 1675, offerRate: 335 },
      { id: 105, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '1inch CHOTTA FANCY (1 இன்ச் சோட்டா ஃபேன்சி)', per: "BOX", price: 200, offerRate: 40 },
      { id: 106, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '2inch FANCY (1PC) - A GRADE (2 இன்ச் ஃபேன்சி A தரம், 1 துண்டு)', per: "BOX", price: 700, offerRate: 140 },
      { id: 107, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '2inch FANCY (1PC) - B GRADE (2 இன்ச் ஃபேன்சி B தரம், 1 துண்டு)', per: "BOX", price: 550, offerRate: 110 },
      { id: 108, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '2inch FANCY (3PCS) - A GRADE (2 இன்ச் ஃபேன்சி A தரம், 3 துண்டுகள்)', per: "BOX", price: 1650, offerRate: 330 },
      { id: 109, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '2inch FANCY (3PCS) - B GRADE (2 இன்ச் ஃபேன்சி B தரம், 3 துண்டுகள்)', per: "BOX", price: 1250, offerRate: 250 },
      { id: 110, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '2.5inch FANCY (3 STEPS) (2.5 இன்ச் ஃபேன்சி 3 படிகள்)', per: "BOX", price: 1500, offerRate: 300 },
      { id: 111, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '3.5inch FANCY A GRADE (3.5 இன்ச் ஃபேன்சி A தரம்)', per: "BOX", price: 1600, offerRate: 320 },
      { id: 112, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '3.5inch FANCY B GRADE (3.5 இன்ச் ஃபேன்சி B தரம்)', per: "BOX", price: 1350, offerRate: 270 },
      { id: 113, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '4inch FANCY (4 இன்ச் ஃபேன்சி)', per: "BOX", price: 1750, offerRate: 350 },
      { id: 114, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '4inch FANCY DOUBLE BALL (4 இன்ச் ஃபேன்சி டபுள் பால்)', per: "BOX", price: 2600, offerRate: 520 },
      { id: 115, category: "NIGHT FANCY OUTER PIPE (நைட் ஃபேன்சி அவுட்டர் பைப்)", name: '5inch FANCY (5 இன்ச் ஃபேன்சி)', per: "BOX", price: 5000, offerRate: 1000 }
      ]
    },
    {
        name: "PEACOCK FOUNTAINS",
        products: [
          { id: 116, category: "PEACOCK FOUNTAINS", name: "MAGIC PEACOCK", per: "BOX", price: 950, offerRate: 190 },
        { id: 117, category: "PEACOCK FOUNTAINS", name: "BADA PEACOCK", per: "BOX", price: 2700, offerRate: 540 }
        ]
      },
    {
      name: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)",
      products: [
        { id: 118, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "12 SHOTS RIDER (12 ஷாட்ஸ் ரைடர்)", per: "BOX", price: 725, offerRate: 145 },
      { id: 119, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "12 SHOTS MULTICOLOUR (12 ஷாட்ஸ் பல வண்ணங்கள்)", per: "BOX", price: 1100, offerRate: 220, outOfStock: true },
      { id: 120, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "15 SHOTS MULTICOLOUR (15 ஷாட்ஸ் பல வண்ணங்கள்)", per: "BOX", price: 1500, offerRate: 300 },
      { id: 121, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "25 SHOTS RIDER (25 ஷாட்ஸ் ரைடர்)", per: "BOX", price: 1100, offerRate: 220 },
      { id: 122, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "30 SHOTS MULTICOLOUR A GRADE (30 ஷாட்ஸ் பல வண்ணங்கள் A தரம்)", per: "BOX", price: 2750, offerRate: 550 },
      { id: 123, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "30 SHOTS MULTICOLOUR B GRADE (30 ஷாட்ஸ் பல வண்ணங்கள் B தரம்)", per: "BOX", price: 2250, offerRate: 450 },
      { id: 124, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "60 SHOTS MULTICOLOUR A GRADE (60 ஷாட்ஸ் பல வண்ணங்கள் A தரம்)", per: "BOX", price: 5500, offerRate: 1100 },
      { id: 125, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "60 SHOTS MULTICOLOUR B GRADE (60 ஷாட்ஸ் பல வண்ணங்கள் B தரம்)", per: "BOX", price: 4500, offerRate: 900 },
      { id: 126, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "120 SHOTS A GRADE (120 ஷாட்ஸ் A தரம்)", per: "BOX", price: 11000, offerRate: 2200 },
      { id: 127, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "120 SHOTS B GRADE (120 ஷாட்ஸ் B தரம்)", per: "BOX", price: 9000, offerRate: 1800 },
      { id: 128, category: "NIGHT FANCY MULTI SHOTS (நைட் ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "240 SHOTS (240 ஷாட்ஸ்)", per: "BOX", price: 22000, offerRate: 4400 }
      ]
    },
    {
      name: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)",
      products: [
         { id: 129, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "6 SHOTS LOVE DOVE (6 ஷாட்ஸ் லவ் டவ்)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 130, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "10 SHOTS WITH SKY CHAKKAR (10 ஷாட்ஸ் வானச் சக்கரத்துடன்)", per: "BOX", price: 0, offerRate: 0, outOfStock: true },
      { id: 131, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "30 SHOTS PEACOCK DANCE (30 ஷாட்ஸ் மயில் நடனம்)", per: "BOX", price: 0, offerRate: 0, outOfStock: true },
      { id: 132, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "5 X 10 (50 SHOTS) (5 x 10, மொத்தம் 50 ஷாட்ஸ்)", per: "BOX", price: 12500, offerRate: 2500 },
      { id: 133, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "10 X 10 (100 SHOTS) (10 x 10, மொத்தம் 100 ஷாட்ஸ்)", per: "BOX", price: 25000, offerRate: 5000 },
      { id: 134, category: "SPECIAL FANCY MULTISHOTS (சிறப்பு ஃபேன்சி மல்டி ஷாட்ஸ்)", name: "GUN SHOOTER (கன் ஷூட்டர்)", per: "BOX", price: 0, offerRate: 0, outOfStock: true }
      ]
    },
    {
      name: "ROLL CAPS & GUNS (ரோல் கேப்ஸ் மற்றும் துப்பாக்கிகள்)",
      products: [
         { id: 135, category: "ROLL CAPS & GUNS (ரோல் கேப்ஸ் மற்றும் துப்பாக்கிகள்)", name: "ROLL CAPS (ரோல் கேப்ஸ்)", per: null, price: 500, offerRate: 100 },
      { id: 136, category: "ROLL CAPS & GUNS (ரோல் கேப்ஸ் மற்றும் துப்பாக்கிகள்)", name: "GUN (துப்பாக்கி)", per: null, price: 600, offerRate: 120 }
      ]
    },
    {
      name: "COLOUR MATCHES (வண்ண தீப்பெட்டிகள்)",
      products: [
         { id: 137, category: "COLOUR MATCHES (வண்ண தீப்பெட்டிகள்)", name: "3IN1 SMALL MATCHES (3 இன் 1 சிறிய தீப்பெட்டி)", per: "BOX", price: 175, offerRate: 35 },
      { id: 138, category: "COLOUR MATCHES (வண்ண தீப்பெட்டிகள்)", name: "ROYAL 10 IN 1 MEGA MATCHES (ராயல் 10 இன் 1 மெகா தீப்பெட்டி)", per: "BOX", price: 1300, offerRate: 260 }
      ]
    },
    {
      name: "MUSICAL MULTI SHOTS (இசை மல்டி ஷாட்ஸ்)",
      products: [
        { id: 139, category: "MUSICAL MULTI SHOTS (இசை மல்டி ஷாட்ஸ்)", name: "12 SINGING BIRD MUSICAL SHOTS (12 பாடும் பறவை இசை ஷாட்ஸ்)", per: "BOX", price: 2750, offerRate: 550 },
      { id: 140, category: "MUSICAL MULTI SHOTS (இசை மல்டி ஷாட்ஸ்)", name: "25 SINGING BIRD MUSICAL SHOTS (25 பாடும் பறவை இசை ஷாட்ஸ்)", per: "BOX", price: 5500, offerRate: 1100 },
      { id: 141, category: "MUSICAL MULTI SHOTS (இசை மல்டி ஷாட்ஸ்)", name: "WHISTLE READY (விசில் ரெடி)", per: "BOX", price: 0, offerRate: 0, outOfStock: true }
      ]
    },
    {
      name: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)",
      products: [
           { id: 142, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "CRACKLING EXPRESS 100 (கிராக்கிளிங் எக்ஸ்பிரஸ் 100)", per: "BOX", price: 300, offerRate: 60 },
      { id: 143, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "LEGEND 200 (லெஜெண்ட் 200)", per: "BOX", price: 575, offerRate: 115 },
      { id: 144, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "1K A (1K A)", per: "BOX", price: 1650, offerRate: 330 },
      { id: 145, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "1K B (1K B)", per: "BOX", price: 1125, offerRate: 225 },
      { id: 146, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "5K A (5K A)", per: "BOX", price: 8250, offerRate: 1650 },
      { id: 147, category: "CRACKLING CRACKERS (கிராக்கிளிங் பட்டாசுகள்)", name: "5K B (5K B)", per: "BOX", price: 5550, offerRate: 1110 }
      ]
    },
    {
      name: "NEW ARRIVALS FANCY (புதிய ஃபேன்சி வரவுகள்)",
      products: [
        { id: 148, category: "NEW ARRIVALS FANCY (புதிய ஃபேன்சி வரவுகள்)", name: '4inch FANCY PIPE NIAGARA (4 இன்ச் ஃபேன்சி பைப் நயாகரா)', per: null, price: 2750, offerRate: 550 },
      { id: 149, category: "NEW ARRIVALS FANCY (புதிய ஃபேன்சி வரவுகள்)", name: "GANG BANG 16 SHOTS SPECIAL FUNCTION (கேங் பேங் 16 ஷாட்ஸ் ஸ்பெஷல் ஃபங்ஷன்)", per: null, price: 15000, offerRate: 3000 }
      ]
    },
    {
      name: "MOUNTAIN FOUNTAIN (மலை நீரூற்று)",
      products: [
         { id: 150, category: "MOUNTAIN FOUNTAIN (மலை நீரூற்று)", name: "MOUNT VALCANO RED (மவுண்ட் வால்கானோ சிவப்பு)", per: "BOX", price: 835, offerRate: 167 },
      { id: 151, category: "MOUNTAIN FOUNTAIN (மலை நீரூற்று)", name: "MOUNT EVEREST WHITE (மவுண்ட் எவரெஸ்ட் வெள்ளை)", per: "BOX", price: 835, offerRate: 167 },
      { id: 152, category: "MOUNTAIN FOUNTAIN (மலை நீரூற்று)", name: "MOUNT LANTER GREEN (மவுண்ட் லான்டர் பச்சை)", per: "BOX", price: 835, offerRate: 167 }
      ]
    },
    {
      name: "POWER PUFF GIRLS FOUNTAIN (பவர் பஃப் கேர்ள்ஸ் நீரூற்று)",
      products: [
          { id: 153, category: "POWER PUFF GIRLS FOUNTAIN (பவர் பஃப் கேர்ள்ஸ் நீரூற்று)", name: "POWER PUFF GIRLS RED (பவர் பஃப் கேர்ள்ஸ் சிவப்பு)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 154, category: "POWER PUFF GIRLS FOUNTAIN (பவர் பஃப் கேர்ள்ஸ் நீரூற்று)", name: "POWER PUFF GIRLS GREEN (பவர் பஃப் கேர்ள்ஸ் பச்சை)", per: "BOX", price: 1000, offerRate: 200 },
      { id: 155, category: "POWER PUFF GIRLS FOUNTAIN (பவர் பஃப் கேர்ள்ஸ் நீரூற்று)", name: "POWER PUFF GIRLS WHITE (பவர் பஃப் கேர்ள்ஸ் வெள்ளை)", per: "BOX", price: 1000, offerRate: 200 }
      ]
    },
    {
      name: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)",
      products: [
         { id: 156, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "GIFT BOX 25 ITEMS (NET RATE) (25 பொருட்கள் கிஃப்ட் பாக்ஸ், நிகர விலை)", per: "BOX", price: 0, offerRate: 700 },
      { id: 157, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "GIFT BOX 35 ITEMS (NET RATE) (35 பொருட்கள் கிஃப்ட் பாக்ஸ், நிகர விலை)", per: "BOX", price: 0, offerRate: 950 },
      { id: 158, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "GIFT BOX 50 ITEMS (NET RATE) (50 பொருட்கள் கிஃப்ட் பாக்ஸ், நிகர விலை)", per: "BOX", price: 0, offerRate: 1600 },
      { id: 159, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "COMBO BACK A (காம்போ பேக் A)", per: "BOX", price: 0, offerRate: 4000 },
      { id: 160, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "COMBO BACK B (காம்போ பேக் B)", per: "BOX", price: 0, offerRate: 7000 },
      { id: 161, category: "GIFT BOX & COMBO BACK (கிஃப்ட் பாக்ஸ் மற்றும் காம்போ பேக்)", name: "COMBO BACK C (காம்போ பேக் C)", per: "BOX", price: 0, offerRate: 12000 }
      ]
    },
  ];

  
const updatedPrices = {
    1:[79,16], 2:[53,11], 3:[116,23], 4:[173,35], 5:[189,38],
    6:[231,46], 7:[263,53], 8:[68,14], 9:[74,15], 10:[84,17],
    11:[100,20], 12:[121,24], 13:[137,27], 14:[143,29], 15:[153,31],
    16:[252,50], 17:[263,53], 18:[294,59], 19:[315,63], 20:[252,50],
    21:[263,53], 22:[294,59], 23:[315,63], 24:[1155,231], 25:[1313,263],
    26:[446,89], 27:[525,105], 28:[656,131], 29:[1313,263], 30:[210,42],
    31:[231,46], 32:[263,53], 33:[525,105], 34:[1050,210], 35:[735,147],
    36:[473,95], 37:[368,74], 38:[578,116], 39:[473,95], 40:[893,179],
    41:[683,137], 42:[1323,265], 43:[1155,231], 44:[1444,289], 45:[1365,273],
    46:[998,200], 47:[284,57], 48:[483,97], 49:[756,151], 50:[840,168],
    51:[788,158], 52:[1838,368], 53:[893,179], 54:[158,32], 55:[420,84],
    56:[525,105], 57:[578,116], 58:[525,105], 59:[210,42], 60:[158,32],
    61:[158,32], 62:[158,32], 63:[578,116], 64:[1050,210], 65:[1313,263],
    66:[2888,578], 67:[1418,284], 68:[1418,284], 69:[788,158], 70:[1365,273],
    71:[1575,315], 72:[840,168], 73:[893,179], 74:[578,116], 75:[1050,210],
    76:[630,126], 77:[788,158], 78:[919,184], 79:[1181,236], 80:[656,131],
    81:[656,131], 82:[656,131], 83:[656,131], 84:[761,152], 85:[1575,315],
    86:[1286,257], 87:[1286,257], 88:[1286,257], 89:[1286,257], 90:[446,89],
    91:[1050,210], 92:[971,194], 93:[971,194], 94:[3465,693], 95:[2100,420],
    96:[630,126], 97:[840,168], 98:[1155,231], 99:[1575,315], 100:[1575,315],
    101:[1575,315], 102:[1575,315], 103:[1155,231], 104:[1759,352],
    105:[236,47], 106:[735,147], 107:[578,116], 108:[1733,347],
    109:[1313,263], 110:[1575,315], 111:[1680,336], 112:[1418,284],
    113:[1838,368], 114:[2730,546], 115:[5250,1050], 116:[998,200],
    117:[2835,567], 118:[761,152], 119:[1155,231], 120:[1575,315],
    121:[1155,231], 122:[2888,578], 123:[2363,473], 124:[5775,1155],
    125:[4725,945], 126:[11550,2310], 127:[9450,1890], 128:[23100,4620],
    129:[1050,210], 130:[1470,294], 131:[2363,473], 132:[13125,2625],
    133:[26250,5250], 134:[2888,578], 135:[525,105], 136:[630,126],
    137:[184,37], 138:[1365,273], 139:[2888,578], 140:[5775,1155],
    141:[0,0], 142:[315,63], 143:[604,121], 144:[1733,347],
    145:[1181,236], 146:[8663,1733], 147:[5828,1166], 148:[2888,578],
    149:[15750,3150], 150:[877,175], 151:[877,175], 152:[877,175],
    153:[1050,210], 154:[1050,210], 155:[1050,210],
    156:[0,700], 157:[0,950], 158:[0,1600], 159:[0,4000], 160:[0,7000], 161:[0,12000]
  };
  
  productGroups.forEach(group => {
    group.products.forEach(product => {
      const priceData = updatedPrices[product.id];
  
      if (priceData) {
        product.price = priceData[0];
        product.offerRate = priceData[1];
      }
    });
  });
  
const CUSTOMER_DISCOUNT_RATE = 0.5;
const SHOWCASE_DISCOUNT_RATE = 0.8;
const MIN_ORDER_OFFER_AMOUNT = 3000;

const customerOfferRate = 1 - CUSTOMER_DISCOUNT_RATE;
const showcaseOriginalRate = 1 - SHOWCASE_DISCOUNT_RATE;

const accordion = document.getElementById("productAccordion");
const productCountEl = document.getElementById("productCount");
const totalDiscountEl = document.getElementById("totalDiscount");
const grandTotalEl = document.getElementById("grandTotal");
const grandOfferTotalEl = document.getElementById("grandOfferTotal");

const selectionScreen = document.getElementById("selectionScreen");
const reviewScreen = document.getElementById("reviewScreen");
const invoiceScreen = document.getElementById("invoiceScreen");

const reviewTableBody = document.getElementById("reviewTableBody");
const invoiceTableBody = document.getElementById("invoiceTableBody");
const reviewEmptyState = document.getElementById("reviewEmptyState");
const minimumOrderMessage = document.getElementById("minimumOrderMessage");
const customerFormMessage = document.getElementById("customerFormMessage");
const minimumOrderBannerEl = document.querySelector(".minimum-order-banner");
const orderProgressBarEl = document.getElementById("orderProgressBar");
const orderProgressTextEl = document.getElementById("orderProgressText");
const orderTargetCardEl = document.getElementById("orderTargetCard");
const orderTargetAmountEl = document.getElementById("orderTargetAmount");
const productSearchEl = document.getElementById("productSearch");
const groupFilterEl = document.getElementById("groupFilter");
const sortFilterEl = document.getElementById("sortFilter");
const catalogEmptyStateEl = document.getElementById("catalogEmptyState");
const mobileMiniCartEl = document.getElementById("mobileMiniCart");
const miniCartItemCountEl = document.getElementById("miniCartItemCount");
const miniCartQuantityEl = document.getElementById("miniCartQuantity");
const miniCartDiscountEl = document.getElementById("miniCartDiscount");
const miniCartGrandTotalEl = document.getElementById("miniCartGrandTotal");
const miniCartOfferTotalEl = document.getElementById("miniCartOfferTotal");
const miniCartResetButton = document.getElementById("miniCartResetButton");
const miniCartReviewButton = document.getElementById("miniCartReviewButton");
const downloadToastEl = document.getElementById("downloadToast");
const webResetButtons = document.querySelectorAll(".reset-session-button");

const reviewButton = document.getElementById("reviewButton");
const backButton = document.getElementById("backButton");
const invoiceButton = document.getElementById("invoiceButton");
const invoiceBackButton = document.getElementById("invoiceBackButton");
const printButton = document.getElementById("printButton");

const invoiceDateEl = document.getElementById("invoiceDate");
const invoiceNumberEl = document.getElementById("invoiceNumber");
const reviewProductCountEl = document.getElementById("reviewProductCount");
const reviewTotalQuantityEl = document.getElementById("reviewTotalQuantity");
const reviewGrandTotalEl = document.getElementById("reviewGrandTotal");
const reviewGrandOfferTotalEl = document.getElementById("reviewGrandOfferTotal");
const invoiceProductCountEl = document.getElementById("invoiceProductCount");
const invoiceTotalQuantityEl = document.getElementById("invoiceTotalQuantity");
const invoiceGrandTotalEl = document.getElementById("invoiceGrandTotal");
const invoiceGrandOfferTotalEl = document.getElementById("invoiceGrandOfferTotal");
const customerNameEl = document.getElementById("customerName");
const customerPhoneEl = document.getElementById("customerPhone");
const customerAddressEl = document.getElementById("customerAddress");
const customerNameErrorEl = document.getElementById("customerNameError");
const customerPhoneErrorEl = document.getElementById("customerPhoneError");
const customerAddressErrorEl = document.getElementById("customerAddressError");
const invoiceCustomerNameEl = document.getElementById("invoiceCustomerName");
const invoiceCustomerPhoneEl = document.getElementById("invoiceCustomerPhone");
const invoiceCustomerAddressEl = document.getElementById("invoiceCustomerAddress");
const screens = [selectionScreen, reviewScreen, invoiceScreen];
const groupDisplayMeta = {
    Electronics: { icon: "E", theme: "electronics" },
    "Computer Peripherals": { icon: "P", theme: "peripherals" },
    Accessories: { icon: "A", theme: "accessories" },
    "Gift Boxes": { icon: "G", theme: "gift-boxes" }
};
const QUANTITY_STORAGE_KEY = "novamart.quantities";
const CUSTOMER_STORAGE_KEY = "novamart.customer.details";
const APP_VERSION = "1.1.0";
// PDF libraries are loaded from multiple CDNs so one unavailable host will not break PDF download.
const JSPDF_LIBRARY_URLS = [
    "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js",
    "https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js",
    "https://unpkg.com/jspdf@2.5.2/dist/jspdf.umd.min.js"
];
const JSPDF_AUTOTABLE_LIBRARY_URLS = [
    "https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.4/jspdf.plugin.autotable.min.js",
    "https://cdn.jsdelivr.net/npm/jspdf-autotable@3.8.4/dist/jspdf.plugin.autotable.min.js",
    "https://unpkg.com/jspdf-autotable@3.8.4/dist/jspdf.plugin.autotable.min.js"
];

const products = productGroups.flatMap((group) => group.products);
const productGroupById = new Map();
const quantityState = new Map(products.map((product) => [product.id, 0]));
let downloadToastTimer = null;
let jsPdfLoaderPromise = null;

const productImageModal = document.getElementById("productImageModal");
const productImageModalContent = document.getElementById("productImageModalContent");
const productImageModalCaption = document.getElementById("productImageModalCaption");
const imageModalClose = productImageModal.querySelector(".image-modal-close");

document.addEventListener("click", (event) => {
    const imageButton = event.target.closest(".product-image-button");

    if (imageButton && !imageButton.classList.contains("image-missing")) {
        productImageModalContent.src = imageButton.dataset.imageSrc;
        productImageModalContent.alt = imageButton.dataset.imageName;
        productImageModalCaption.textContent = imageButton.dataset.imageName;
        productImageModal.hidden = false;
        document.body.classList.add("image-modal-open");
    }
});

function closeProductImageModal() {
    productImageModal.hidden = true;
    productImageModalContent.src = "";
    document.body.classList.remove("image-modal-open");
}

imageModalClose.addEventListener("click", closeProductImageModal);

productImageModal.addEventListener("click", (event) => {
    if (event.target === productImageModal) {
        closeProductImageModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !productImageModal.hidden) {
        closeProductImageModal();
    }
});

productGroups.forEach((group) => {
    group.products.forEach((product) => {
        productGroupById.set(product.id, group.name);
    });
});

function formatAmount(value) {
    return value.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function loadStoredJson(storageKey) {
    try {
        const rawValue = localStorage.getItem(storageKey);
        return rawValue ? JSON.parse(rawValue) : null;
    } catch {
        return null;
    }
}

function saveStoredJson(storageKey, value) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(value));
    } catch {
        // Ignore storage quota or privacy-mode write failures.
    }
}

function persistQuantities() {
    saveStoredJson(QUANTITY_STORAGE_KEY, Object.fromEntries(quantityState));
}

function persistCustomerDetails() {
    saveStoredJson(CUSTOMER_STORAGE_KEY, getCustomerDetails());
}

function clearStoredSession() {
    try {
        localStorage.removeItem(QUANTITY_STORAGE_KEY);
        localStorage.removeItem(CUSTOMER_STORAGE_KEY);
    } catch {
        // Ignore storage clear failures.
    }
}

function restoreQuantities() {
    const storedQuantities = loadStoredJson(QUANTITY_STORAGE_KEY);
    if (!storedQuantities || typeof storedQuantities !== "object") {
        return;
    }

    products.forEach((product) => {
        const storedValue = Number(storedQuantities[product.id]);
        if (Number.isFinite(storedValue) && storedValue >= 0) {
            quantityState.set(product.id, storedValue);
        }
    });
}

function restoreCustomerDetails() {
    const storedCustomer = loadStoredJson(CUSTOMER_STORAGE_KEY);
    if (!storedCustomer || typeof storedCustomer !== "object") {
        return;
    }

    customerNameEl.value = typeof storedCustomer.name === "string" ? storedCustomer.name : "";
    customerPhoneEl.value = typeof storedCustomer.phone === "string" ? storedCustomer.phone : "";
    customerAddressEl.value = typeof storedCustomer.address === "string" ? storedCustomer.address : "";
}

function getNextInvoiceNumber() {
    const storageKey = "novamart.invoice.counter";
    const currentCounter = Number(localStorage.getItem(storageKey)) || 0;
    const nextCounter = currentCounter + 1;
    localStorage.setItem(storageKey, String(nextCounter));

    const now = new Date();
    const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    const timePart = `${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}${String(now.getSeconds()).padStart(2, "0")}${String(now.getMilliseconds()).padStart(3, "0")}`;
    const counterPart = String(nextCounter).padStart(5, "0");

    return `INV-${datePart}-${timePart}-${counterPart}`;
}

function calculatePrices(product, quantity) {
    const isFixedPrice = Boolean(product.isFixedPrice);
    const showcasedOriginalPrice = isFixedPrice
        ? product.price
        : product.price;
    const customerOfferPrice = isFixedPrice
        ? product.price
        : product.offerRate;

    const rowTotal = quantity * showcasedOriginalPrice;
    const rowOfferTotal = quantity * customerOfferPrice;

    return {
        showcasedOriginalPrice,
        customerOfferPrice,
        rowTotal,
        rowOfferTotal
    };
}

function buildPricePairCell(originalAmount, offerAmount, isFixedPrice = false) {
    if (isFixedPrice) {
        return `
            <td class="price-pair-cell" data-label="Price">
                <div class="price-line"><span class="amount-fixed">${formatAmount(originalAmount)}</span></div>
                <div class="price-line"><span class="price-tag">No offer applied</span></div>
            </td>
        `;
    }

    return `
        <td class="price-pair-cell" data-label="Price">
            <div class="price-line"><span class="amount-original">${formatAmount(originalAmount)}</span></div>
            <div class="price-line"><span class="amount-offer">${formatAmount(offerAmount)}</span></div>
        </td>
    `;
}

function createRowMarkup(product) {
    const quantity = quantityState.get(product.id) || 0;
    const pricing = calculatePrices(product, quantity);
    const productName = product.isFixedPrice
        ? `${product.name} <span class="price-tag">Fixed Price</span>`
        : product.name;

        if(product.outOfStock)
            {
                return `
                <tr id="product-row-${product.id}">
                    <td data-label="SI.No">${product.id}</td>
                    <td class="product-image-cell">
    ${getProductImageMarkup(product)}
</td>
                    <td data-label="Product Name" CLASS="money" ><span  class="money amount-original">${productName} (${product.per}) </span> <BR> No Stock</td>
                    ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice, product.isFixedPrice)}
                    <td data-label="Quantity" style="pointer-events: none; opacity: 0.5; background-color: #f2f2f2; color: #888;">${buildQuantityStepper(product, quantity)}</td>
                    <td class="money amount-offer" id="offer-total-${product.id}" data-label="Total Offer Amount">0.00</td>
                </tr>
            `;
            } else {
                return `
                <tr id="product-row-${product.id}">
                    <td data-label="SI.No">${product.id}</td>
                    <td class="product-image-cell">
    ${getProductImageMarkup(product)}
</td>
                    <td data-label="Product Name" >${productName} (${product.per})</td>
                    ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice, product.isFixedPrice)}
                    <td data-label="Quantity" >${buildQuantityStepper(product, quantity)}</td>
                    <td class="money amount-offer" id="offer-total-${product.id}" data-label="Total Offer Amount">0.00</td>
                </tr>
            `;
            }
               
}

function buildQuantityStepper(product, quantity) {
    return `
        <div class="quantity-stepper">
            <button type="button" class="quantity-action" data-action="decrease" data-id="${product.id}" aria-label="Decrease quantity for ${product.name}">-</button>
            <input
                type="number"
                min="0"
                value="${quantity}"
                class="quantity"
                data-id="${product.id}"
                aria-label="Quantity for ${product.name}"
            >
            <button type="button" class="quantity-action" data-action="increase" data-id="${product.id}" aria-label="Increase quantity for ${product.name}">+</button>
        </div>
    `;
}

function syncQuantityInputs(productId, quantity) {
    document.querySelectorAll(`input[data-id="${productId}"]`).forEach((input) => {
        input.value = String(quantity);
    });
}

function refreshQuantityDependentViews() {
    updateTotals();

    if (!reviewScreen.classList.contains("hidden") && !isMinimumOrderMet()) {
        showSelectionScreen();
        showMinimumOrderWarning();
        return;
    }

    if (!reviewScreen.classList.contains("hidden")) {
        renderReviewTable();
    }

    if (!invoiceScreen.classList.contains("hidden")) {
        renderInvoice();
    }
}

function setQuantityValue(productId, nextValue) {
    const quantity = Math.max(0, nextValue);

    quantityState.set(productId, quantity);
    syncQuantityInputs(productId, quantity);
    minimumOrderMessage.classList.add("hidden");
    persistQuantities();
    refreshQuantityDependentViews();
}
function getProductImagePath(product) {
    return `${product.id}.jpg`;
}

function getProductImageMarkup(product) {
    const imagePath = getProductImagePath(product);

    return `
        <button
            type="button"
            class="product-image-button"
            data-image-src="${imagePath}"
            data-image-name="${product.name}"
            aria-label="View image of ${product.name}"
        >
            <img
                class="product-thumbnail"
                src="${imagePath}"
                alt="${product.name}"
                loading="lazy"
                onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');"
            >
        </button>
    `;
}

function matchesCatalogFilters(product, groupName) {
    const searchTerm = productSearchEl.value.trim().toLowerCase();
    const selectedGroup = groupFilterEl.value;
    const matchesGroup = selectedGroup === "all" || selectedGroup === groupName;
    const matchesSearch = searchTerm.length === 0
        || product.name.toLowerCase().includes(searchTerm)
        || String(product.id).includes(searchTerm);

    return matchesGroup && matchesSearch;
}

function populateGroupFilter() {
    const options = productGroups
        .map((group) => `<option value="${group.name}">${group.name}</option>`)
        .join("");

    groupFilterEl.insertAdjacentHTML("beforeend", options);
}

function buildReviewRowMarkup(product, quantity, pricing, index) {
    return `
        <td data-label="SI.No">${index + 1}</td>
        <td data-label="Product Code">${String(product.id)}</td>
        <td data-label="Group">${productGroupById.get(product.id)}</td>
        <td data-label="Product Name">${product.name} (${product.per})</td>
        ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice, product.isFixedPrice)}
        <td data-label="Quantity">${buildQuantityStepper(product, quantity)}</td>
        <td class="money amount-offer" data-label="Total Offer Amount">${formatAmount(pricing.rowOfferTotal)}</td>
    `;
}

function buildInvoiceRowMarkup(product, quantity, pricing, index) {
    return `
        <td data-label="SI.No">${index + 1}</td>
        <td data-label="Product Code">${String(product.id)}</td>
        <td data-label="Group">${productGroupById.get(product.id).replace(/\([^)]*\)/g, '').trim()}</td>
        <td data-label="Product Name">${product.name.replace(/\([^)]*\)/g, '').trim()} (${product.per})</td>
        ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice, product.isFixedPrice)}
        <td data-label="Quantity">${quantity}</td>
        <td class="money amount-offer" data-label="Total Offer Amount">${formatAmount(pricing.rowOfferTotal)}</td>
    `;
}

function updateMinimumOrderProgress(currentOfferTotal) {
    const progressPercentage = Math.min((currentOfferTotal / MIN_ORDER_OFFER_AMOUNT) * 100, 100);
    const remainingAmount = Math.max(MIN_ORDER_OFFER_AMOUNT - currentOfferTotal, 0);
    const hasReachedMinimum = currentOfferTotal >= MIN_ORDER_OFFER_AMOUNT;

    orderProgressBarEl.style.width = `${progressPercentage}%`;
    orderProgressBarEl.classList.toggle("is-complete", hasReachedMinimum);
    orderTargetCardEl.classList.toggle("is-complete", hasReachedMinimum);
    orderTargetAmountEl.textContent = hasReachedMinimum
        ? "Unlocked"
        : `${formatAmount(remainingAmount)}`;
    orderProgressTextEl.textContent = hasReachedMinimum
        ? `Target reached. ${formatAmount(currentOfferTotal)} of ${formatAmount(MIN_ORDER_OFFER_AMOUNT)}`
        : `${formatAmount(currentOfferTotal)} of ${formatAmount(MIN_ORDER_OFFER_AMOUNT)} reached. Add ${formatAmount(remainingAmount)} more.`;
}

function updateProductRowState(productId, quantity) {
    const row = document.getElementById(`product-row-${productId}`);
    if (!row) {
        return;
    }

    row.classList.toggle("row-selected", quantity > 0);
}

function updateMiniCartSummary(selectedProductCount, totalQuantity, grandTotal, grandOfferTotal) {
    const hasSelections = selectedProductCount > 0;
    const totalDiscount = grandTotal - grandOfferTotal;

    miniCartItemCountEl.textContent = `${selectedProductCount} item${selectedProductCount === 1 ? "" : "s"}`;
    miniCartQuantityEl.textContent = `Qty ${totalQuantity}`;
    miniCartDiscountEl.textContent = formatAmount(totalDiscount);
    miniCartGrandTotalEl.textContent = formatAmount(grandTotal);
    miniCartOfferTotalEl.textContent = formatAmount(grandOfferTotal);
    mobileMiniCartEl.classList.toggle("has-items", hasSelections);
    miniCartReviewButton.disabled = !hasSelections;
    miniCartResetButton.disabled = !hasSelections && !getCustomerDetails().name && !getCustomerDetails().phone && !getCustomerDetails().address;
}

function updateMiniCartScrollState() {
    const shouldCompact = window.innerWidth <= 780 && window.scrollY > 160;
    mobileMiniCartEl.classList.toggle("is-compact", shouldCompact);
}

function updateMiniCartVisibility(targetScreen) {
    const shouldShow = targetScreen === selectionScreen || targetScreen === reviewScreen;
    mobileMiniCartEl.classList.toggle("hidden", !shouldShow);
}

function updateMiniCartAction(targetScreen) {
    const isReviewScreen = targetScreen === reviewScreen;

    miniCartReviewButton.textContent = isReviewScreen ? "Generate Invoice" : "Review";
    miniCartReviewButton.setAttribute("aria-label", isReviewScreen ? "Generate invoice" : "Review selected products");
}

function showMinimumOrderWarning() {
    const currentOfferTotal = getCurrentGrandOfferTotal();
    const remainingAmount = Math.max(MIN_ORDER_OFFER_AMOUNT - currentOfferTotal, 0);

    minimumOrderMessage.textContent = `Minimum order not met. Add ${formatAmount(remainingAmount)} more to reach an offer total of ${formatAmount(MIN_ORDER_OFFER_AMOUNT)}.`;
    minimumOrderMessage.classList.remove("hidden");

    requestAnimationFrame(() => {
       // selectionScreen.scrollIntoView({ behavior: "auto", block: "start" });
        minimumOrderBannerEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

function resetSession() {
    products.forEach((product) => {
        quantityState.set(product.id, 0);
    });

    customerNameEl.value = "";
    customerPhoneEl.value = "";
    customerAddressEl.value = "";
    invoiceCustomerNameEl.textContent = "-";
    invoiceCustomerPhoneEl.textContent = "-";
    invoiceCustomerAddressEl.textContent = "-";
    reviewEmptyState.classList.add("hidden");
    minimumOrderMessage.classList.add("hidden");
    setFieldError(customerNameEl, customerNameErrorEl, "");
    setFieldError(customerPhoneEl, customerPhoneErrorEl, "");
    setFieldError(customerAddressEl, customerAddressErrorEl, "");
    clearStoredSession();
    renderAccordion();
    refreshQuantityDependentViews();
    showScreen(selectionScreen, "back");
    showDownloadToast("Selection reset");
}

function buildProductCardMarkup(product) {
    const quantity = quantityState.get(product.id) || 0;
    const pricing = calculatePrices(product, quantity);
    const unavailable = Boolean(product.outOfStock);
    const fixed = Boolean(product.isFixedPrice);
    return `
      <article class="product-card ${quantity > 0 ? "row-selected" : ""} ${unavailable ? "product-unavailable" : ""}" id="product-row-${product.id}">
        <div class="product-card-media">
          <span class="product-code">#${product.id}</span>
          ${!fixed && !unavailable ? '<span class="product-offer-badge">Festive offer</span>' : ''}
          ${getProductImageMarkup(product)}
          <span class="product-image-caption">${unavailable ? 'Currently unavailable' : (fixed ? 'Fixed price' : 'Special price')}</span>
        </div>
        <div class="product-card-content">
          <div class="product-card-heading">
            <h3>${product.name}</h3>
            <span class="product-unit">${product.per || 'Pack'}</span>
          </div>
          <div class="product-price-block">
            ${fixed ? `<span class="product-current-price">${formatAmount(pricing.showcasedOriginalPrice)}</span><span class="product-fixed-note">Fixed price</span>` : `<span class="product-old-price">${formatAmount(pricing.showcasedOriginalPrice)}</span><span class="product-current-price">${formatAmount(pricing.customerOfferPrice)}</span><span class="product-saving">Save ${formatAmount(pricing.showcasedOriginalPrice - pricing.customerOfferPrice)}</span>`}
          </div>
          <div class="product-card-footer">
            <div class="product-quantity-area">
              <span class="quantity-label">Quantity</span>
              ${unavailable ? '<span class="out-of-stock-label">Out of stock</span>' : buildQuantityStepper(product, quantity)}
            </div>
            <div class="product-line-total"><span>Item total</span><strong id="offer-total-${product.id}">${formatAmount(pricing.rowOfferTotal)}</strong></div>
          </div>
        </div>
      </article>`;
}

function renderAccordion() {
    accordion.innerHTML = "";

    const filteredGroups = productGroups
        .map((group) => ({
            ...group,
            products: group.products.filter((product) => matchesCatalogFilters(product, group.name)).sort((a, b) => {
                const mode = sortFilterEl?.value || "default";
                if (mode === "name-asc") return a.name.localeCompare(b.name);
                if (mode === "price-asc") return a.offerRate - b.offerRate;
                if (mode === "price-desc") return b.offerRate - a.offerRate;
                return a.id - b.id;
            })
        }))
        .filter((group) => group.products.length > 0);

    if (filteredGroups.length === 0) {
        catalogEmptyStateEl.classList.remove("hidden");
        return;
    }

    catalogEmptyStateEl.classList.add("hidden");

    filteredGroups.forEach((group, index) => {
        const isOpen = true;
        const panelId = `group-panel-${index}`;
        const groupMeta = groupDisplayMeta[group.name] || { icon: "🎇", theme: "default" };
        const section = document.createElement("section");
        section.className = `accordion-item group-theme-${groupMeta.theme}`;
        section.innerHTML = `
            <button class="accordion-trigger" type="button" aria-expanded="${isOpen}" aria-controls="${panelId}">
                <span class="accordion-title"><span class="accordion-icon">${groupMeta.icon}</span><span>${group.name}</span></span>
                <span class="accordion-meta">${group.products.length} products <span aria-hidden="true">⌄</span></span>
            </button>
            <div class="accordion-panel ${isOpen ? "open" : ""}" id="${panelId}">
                <div class="product-card-grid" aria-label="${group.name} products">
                    ${group.products.map((product) => buildProductCardMarkup(product)).join("")}
                </div>
            </div>`;
        accordion.appendChild(section);
    });
}

function updateTotals() {
    let grandTotal = 0;
    let grandOfferTotal = 0;
    let selectedProductCount = 0;
    let totalQuantity = 0;

    products.forEach((product) => {
        const quantity = quantityState.get(product.id) || 0;
        const pricing = calculatePrices(product, quantity);

        if (quantity > 0) {
            selectedProductCount += 1;
        }

        const offerTotalCell = document.getElementById(`offer-total-${product.id}`);
        if (offerTotalCell) {
            offerTotalCell.textContent = formatAmount(pricing.rowOfferTotal);
        }
        updateProductRowState(product.id, quantity);

        grandTotal += pricing.rowTotal;
        grandOfferTotal += pricing.rowOfferTotal;
        totalQuantity += quantity;
    });

    productCountEl.textContent = String(selectedProductCount);
    totalDiscountEl.textContent = formatAmount(grandTotal - grandOfferTotal);
    grandTotalEl.textContent = formatAmount(grandTotal);
    grandOfferTotalEl.textContent = formatAmount(grandOfferTotal);
    reviewProductCountEl.textContent = String(selectedProductCount);
    reviewTotalQuantityEl.textContent = String(totalQuantity);
    reviewGrandTotalEl.textContent = formatAmount(grandTotal);
    reviewGrandOfferTotalEl.textContent = formatAmount(grandOfferTotal);
  //  updateMinimumOrderProgress(grandOfferTotal);
    updateMiniCartSummary(selectedProductCount, totalQuantity, grandTotal, grandOfferTotal);
}

function getSelectedProducts() {
    return products
        .map((product) => ({ product, quantity: quantityState.get(product.id) || 0 }))
        .filter((item) => item.quantity > 0);
}

function getCurrentGrandOfferTotal() {
    return products.reduce((sum, product) => {
        const quantity = quantityState.get(product.id) || 0;
        const pricing = calculatePrices(product, quantity);
        return sum + pricing.rowOfferTotal;
    }, 0);
}

function isMinimumOrderMet() {
    return getCurrentGrandOfferTotal() >= MIN_ORDER_OFFER_AMOUNT;
}

function getCustomerDetails() {
    return {
        name: customerNameEl.value.trim(),
        phone: customerPhoneEl.value.trim(),
        address: customerAddressEl.value.trim()
    };
}

function setFieldError(field, errorEl, message = "") {
    const hasError = Boolean(message);

    field.classList.toggle("input-error", hasError);
    errorEl.textContent = message;
    errorEl.classList.toggle("hidden", !hasError);
    field.setAttribute("aria-invalid", String(hasError));
}

function validateCustomerDetails() {
    const customer = getCustomerDetails();
    const cleanedPhone = customer.phone.replace(/\D/g, "");
    const errors = {
        name: customer.name.length > 1 ? "" : "Please enter at least 2 characters.",
        phone: cleanedPhone.length >= 10 ? "" : "Please enter a valid 10-digit mobile number.",
        address: customer.address.length > 5 ? "" : "Please enter at least 6 characters for the address."
    };

    setFieldError(customerNameEl, customerNameErrorEl, errors.name);
    setFieldError(customerPhoneEl, customerPhoneErrorEl, errors.phone);
    setFieldError(customerAddressEl, customerAddressErrorEl, errors.address);

    return {
        isValid: !errors.name && !errors.phone && !errors.address,
        firstInvalidField: errors.name ? customerNameEl : errors.phone ? customerPhoneEl : errors.address ? customerAddressEl : null
    };
}

function renderReviewTable() {
    const selectedItems = getSelectedProducts();
    reviewTableBody.innerHTML = "";

    if (selectedItems.length === 0) {
        reviewEmptyState.classList.remove("hidden");
        return;
    }

    reviewEmptyState.classList.add("hidden");

    selectedItems.forEach(({ product, quantity }, index) => {
        const pricing = calculatePrices(product, quantity);

        const row = document.createElement("tr");
        row.innerHTML = buildReviewRowMarkup(product, quantity, pricing, index);

        reviewTableBody.appendChild(row);
    });
}

function renderInvoice() {
    const selectedItems = getSelectedProducts();
    invoiceTableBody.innerHTML = "";

    let grandTotal = 0;
    let grandOfferTotal = 0;
    let totalQuantity = 0;

    selectedItems.forEach(({ product, quantity }, index) => {
        const pricing = calculatePrices(product, quantity);

        const row = document.createElement("tr");
        row.innerHTML = buildInvoiceRowMarkup(product, quantity, pricing, index);
        invoiceTableBody.appendChild(row);

        grandTotal += pricing.rowTotal;
        grandOfferTotal += pricing.rowOfferTotal;
        totalQuantity += quantity;
    });

    invoiceProductCountEl.textContent = String(selectedItems.length);
    invoiceTotalQuantityEl.textContent = String(totalQuantity);
    invoiceGrandTotalEl.textContent = formatAmount(grandTotal);
    invoiceGrandOfferTotalEl.textContent = formatAmount(grandOfferTotal);
}

function showScreen(targetScreen, direction = "forward") {
    window.scrollTo({ top: 0, behavior: "auto" });
    updateMiniCartVisibility(targetScreen);
    updateMiniCartAction(targetScreen);

    screens.forEach((screen) => {
        const isTarget = screen === targetScreen;
        screen.classList.toggle("hidden", !isTarget);
        screen.classList.remove("screen-active");
        screen.classList.remove("screen-forward", "screen-back");
    });

    void targetScreen.offsetWidth;
    targetScreen.classList.add(direction === "back" ? "screen-back" : "screen-forward");
    targetScreen.classList.add("screen-active");
}

function showReviewScreen() {
    if (!isMinimumOrderMet()) {
        showMinimumOrderWarning();
        return;
    }

    minimumOrderMessage.classList.add("hidden");
    renderReviewTable();
    showScreen(reviewScreen, "forward");
}

function showSelectionScreen() {
    showScreen(selectionScreen, "back");
}

function showInvoiceScreen() {
    const selectedItems = getSelectedProducts();
    if (selectedItems.length === 0) {
        reviewEmptyState.classList.remove("hidden");
        return;
    }

    if (!isMinimumOrderMet()) {
        return;
    }

    const customerValidation = validateCustomerDetails();
    if (!customerValidation.isValid) {
        customerValidation.firstInvalidField?.focus();
        return;
    }

    reviewEmptyState.classList.add("hidden");
    renderInvoice();

    const today = new Date();
    invoiceDateEl.textContent = today.toLocaleDateString("en-IN");
    invoiceNumberEl.textContent = getNextInvoiceNumber();

    const customer = getCustomerDetails();
    invoiceCustomerNameEl.textContent = customer.name;
    invoiceCustomerPhoneEl.textContent = customer.phone;
    invoiceCustomerAddressEl.textContent = customer.address;

    showScreen(invoiceScreen, "forward");
}

function sanitizeFileName(value) {
    return value.replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").trim();
}

function loadExternalScript(url) {
    return new Promise((resolve, reject) => {
        // Avoid adding duplicate script elements when a download is clicked repeatedly.
        const existing = Array.from(document.scripts).find((item) => item.src === url);
        if (existing?.dataset.loaded === "true") {
            resolve();
            return;
        }

        const script = existing || document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = () => {
            script.dataset.loaded = "true";
            resolve();
        };
        script.onerror = () => {
            script.remove();
            reject(new Error(`Failed to load script: ${url}`));
        };
        if (!existing) document.head.appendChild(script);
    });
}

async function loadFirstAvailableScript(urls, isReady, libraryName) {
    if (isReady()) return;
    let lastError;
    for (const url of urls) {
        try {
            await loadExternalScript(url);
            if (isReady()) return;
            lastError = new Error(`${libraryName} loaded but did not initialize: ${url}`);
        } catch (error) {
            lastError = error;
            console.warn(`${libraryName} CDN failed; trying another source.`, error);
        }
    }
    throw lastError || new Error(`Unable to load ${libraryName}. Check your internet connection or CDN access.`);
}

function ensureJsPdfLoaded() {
    if (window.jspdf?.jsPDF?.API?.autoTable) {
        return Promise.resolve(window.jspdf.jsPDF);
    }
    if (jsPdfLoaderPromise) return jsPdfLoaderPromise;

    jsPdfLoaderPromise = (async () => {
        await loadFirstAvailableScript(
            JSPDF_LIBRARY_URLS,
            () => Boolean(window.jspdf?.jsPDF),
            "jsPDF"
        );
        await loadFirstAvailableScript(
            JSPDF_AUTOTABLE_LIBRARY_URLS,
            () => Boolean(window.jspdf?.jsPDF?.API?.autoTable),
            "jsPDF AutoTable plugin"
        );
        return window.jspdf.jsPDF;
    })().catch((error) => {
        // Permit a later retry if the network/CDN was temporarily unavailable.
        jsPdfLoaderPromise = null;
        throw error;
    });

    return jsPdfLoaderPromise;
}

function truncatePdfCellText(value, maxCharsPerLine = 34, maxLines = 2) {
    const text = (value || "").replace(/\s+/g, " ").trim();
    if (!text) {
        return "-";
    }

    const words = text.split(" ");
    const lines = [];
    let current = "";

    for (const word of words) {
        if (!current) {
            current = word;
            continue;
        }

        const candidate = `${current} ${word}`;
        if (candidate.length <= maxCharsPerLine) {
            current = candidate;
            continue;
        }

        lines.push(current);
        current = word;

        if (lines.length === maxLines - 1) {
            break;
        }
    }

    if (lines.length < maxLines && current) {
        lines.push(current);
    }

    const consumedText = lines.join(" ");
    const isTruncated = consumedText.length < text.length;

    if (isTruncated && lines.length > 0) {
        const lastIndex = lines.length - 1;
        const normalizedLastLine = lines[lastIndex].trimEnd();
        const safeBase = normalizedLastLine.length >= maxCharsPerLine
            ? normalizedLastLine.slice(0, Math.max(0, maxCharsPerLine - 1)).trimEnd()
            : normalizedLastLine;
        lines[lastIndex] = `${safeBase}...`;
    }

    return lines.slice(0, maxLines).join("\n");
}


async function registerTamilFont(doc) {
    // Keep this font file in the repository root to render Tamil product names correctly.
    try {
        const response = await fetch("NotoSansTamil-Regular.ttf");
        if (!response.ok) return false;

        const bytes = new Uint8Array(await response.arrayBuffer());
        let binary = "";
        const chunkSize = 0x8000;
        for (let offset = 0; offset < bytes.length; offset += chunkSize) {
            binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
        }

        const fontFile = "NotoSansTamil-Regular.ttf";
        doc.addFileToVFS(fontFile, btoa(binary));
        doc.addFont(fontFile, "NotoTamil", "normal");
        doc.addFont(fontFile, "NotoTamil", "bold");
        return true;
    } catch (error) {
        console.warn("Tamil font could not be loaded; generating PDF with a standard font.", error);
        return false;
    }
}


function appendPdfAuditTrail(doc, invoiceId, generatedAt, pdfFont = "helvetica") {
    const totalPages = doc.internal.getNumberOfPages();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    for (let page = 1; page <= totalPages; page += 1) {
        doc.setPage(page);
        doc.setFont(pdfFont, "normal");
        doc.setFontSize(7);
        doc.setTextColor(100, 116, 139);
        doc.text(`Generated: ${generatedAt}  |  Invoice ID: ${invoiceId}  |  App: ${APP_VERSION}`, 8, pageHeight - 4);
        doc.text(`Page ${page}/${totalPages}`, pageWidth - 8, pageHeight - 4, { align: "right" });
    }

    doc.setTextColor(0, 0, 0);
}

function buildWhatsAppMessage({ invoiceId, customerName, grandOfferTotal, generatedAt }) {
    return [
        "Hello,",
        `Please find your invoice PDF attached.`,
        `Invoice: ${invoiceId}`,
        `Customer: ${customerName || "-"}`,
        `Total Offer Amount: ${formatAmount(grandOfferTotal)}`,
        `Generated: ${generatedAt}`,
        "Thank you."
    ].join("\n");
}


function downloadPdfBlob(pdfBlob, fileName) {
    const downloadUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1500);
}


async function sharePdfToWhatsApp(pdfBlob, fileName, message, targetPhone) {
    const pdfFile = new File([pdfBlob], `${fileName}.pdf`, { type: "application/pdf" });

    if (navigator.share && navigator.canShare?.({ files: [pdfFile] })) {
        try {
            await navigator.share({
                title: "Invoice PDF",
                text: message,
                files: [pdfFile]
            });
            showDownloadToast("Shared. Select WhatsApp if prompted.");
            return;
        } catch {
            // User cancellation or unsupported target; continue to WhatsApp text fallback.
        }
    }

    const cleanedPhone = (targetPhone || "").replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    const waUrl = cleanedPhone.length >= 10
        ? `https://wa.me/7010942234?text=${encodedMessage}`
        : `https://wa.me/?text=${encodedMessage}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    showDownloadToast("WhatsApp opened. Attach downloaded PDF manually.");
}

function buildDownloadDocument() {
    const invoiceNumber = invoiceNumberEl.textContent.trim() || "invoice";
    const invoiceCustomerName = invoiceCustomerNameEl.textContent.trim();
    const customerName = invoiceCustomerName && invoiceCustomerName !== "-"
        ? invoiceCustomerName
        : getCustomerDetails().name || "customer";
    const companyHeading = document.querySelector(".header").innerHTML;
    const invoiceMarkup = `
        <header class="download-header">${companyHeading}</header>
        <section class="download-invoice">
            ${invoiceScreen.querySelector(".review-header").outerHTML}
            ${invoiceScreen.querySelector(".invoice-meta").outerHTML}
            ${invoiceScreen.querySelector(".invoice-customer").outerHTML}
            ${invoiceScreen.querySelector(".table-wrap").outerHTML}
            ${invoiceScreen.querySelector(".invoice-summary").outerHTML}
            ${invoiceScreen.querySelector(".invoice-terms").outerHTML}
        </section>
    `;

    return {
        fileNameBase: `${sanitizeFileName(customerName)}-${sanitizeFileName(invoiceNumber)}`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${invoiceNumber}</title>
    <style>
        body {
            margin: 0;
            padding: 24px;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            color: #1f2937;
            background: #f8fafc;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }

        .sheet {
            max-width: 980px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #dbe4ee;
            border-radius: 18px;
            overflow: visible;
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .download-header {
            padding: 22px 24px;
            background: linear-gradient(120deg, #ecfeff, #eff6ff);
            border-bottom: 2px solid #cbd5e1;
        }

        .download-header h1,
        .download-invoice h2,
        .download-invoice h3 {
            margin-top: 0;
        }

        .download-header p {
            margin: 4px 0 0;
            color: #4b5563;
        }

        .download-invoice {
            padding: 16px 16px 18px;
        }

        .review-header {
            padding: 0 0 12px;
            border-bottom: 2px solid #0f766e;
            margin-bottom: 14px;
        }

        .invoice-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 12px 18px;
            padding: 0 0 14px;
            color: #4b5563;
        }

        .invoice-customer,
        .invoice-terms,
        .summary-item {
            border: 1px solid #dbe4ee;
            border-radius: 12px;
            background: #ffffff;
        }

        .invoice-customer {
            margin-bottom: 14px;
            padding: 12px 14px;
            background: #f8fafc;
        }

        .invoice-customer p {
            margin: 4px 0;
        }

        .table-wrap {
            overflow: visible;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 16px;
            table-layout: fixed;
        }

        th,
        td {
            padding: 7px 6px;
            border: 1px solid #e5e7eb;
            text-align: left;
            font-size: 11px;
            vertical-align: top;
            word-break: break-word;
            white-space: normal;
        }

        th {
            background: #f8fafc;
        }

        .summary {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 16px;
        }

        .summary-item {
            padding: 14px;
        }

        .label {
            display: block;
            margin-bottom: 6px;
            color: #6b7280;
        }

        .amount-original {
            color: #b91c1c;
            text-decoration: line-through;
        }

        
        .amount-offer {
            color: #166534;
            font-weight: 700;
        }

        .amount-fixed {
            color: #0f172a;
            font-weight: 700;
        }

        .price-line {
            line-height: 1.4;
        }

        .price-tag {
            font-size: 9px;
            font-weight: 700;
            color: #6b7280;
            text-transform: uppercase;
        }

        .price-pair-cell {
            min-width: 0;
        }

        .invoice-terms {
            padding: 12px 14px;
            background: #fafafa;
        }

        .invoice-terms ol {
            margin: 0;
            padding-left: 18px;
        }

        .invoice-summary,
        .invoice-terms {
            break-inside: avoid;
            page-break-inside: avoid;
        }

        @media print {
            body {
                padding: 0;
                background: #ffffff;
            }

            .sheet {
                max-width: none;
                border: 0;
                border-radius: 0;
                box-shadow: none;
            }

            .download-invoice {
                padding: 0;
            }

            .invoice-customer,
            .invoice-terms,
            .summary-item,
            .invoice-summary {
                break-inside: avoid;
                page-break-inside: avoid;
            }
        }
    </style>
 </head>
<body>
    <main class="sheet">${invoiceMarkup}</main>
</body>
</html>`
    };
}

async function downloadInvoice() {
    const selectedItems = getSelectedProducts();
    if (selectedItems.length === 0) {
        showDownloadToast("Add at least one product before downloading the PDF.");
        return;
    }

    printButton.disabled = true;
    printButton.textContent = "Preparing PDF...";

    try {
        const JsPdf = await ensureJsPdfLoaded();
        const doc = new JsPdf({ orientation: "landscape", unit: "mm", format: "a4" });
        const pdfFont = await registerTamilFont(doc) ? "NotoTamil" : "helvetica";
        doc.setFont(pdfFont, "normal");
        const { fileNameBase } = buildDownloadDocument();
        renderInvoice();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 8;
        const footerReserve = 12;
        let cursorY = margin;
        const generatedAt = new Date().toLocaleString("en-IN");
        const invoiceId = invoiceNumberEl.textContent.trim() || "-";

        const headerTitle = document.querySelector(".header h1")?.textContent?.trim() || "Quotation / Invoice";
        const headerLines = Array.from(document.querySelectorAll(".header p"))
            .map((node) => node.textContent?.trim() || "")
            .filter(Boolean);

        doc.setFont(pdfFont, "bold");
        doc.setFontSize(14);
        doc.text(headerTitle, margin, cursorY);
        cursorY += 5;

        doc.setFont(pdfFont, "normal");
        doc.setFontSize(9);
        headerLines.forEach((line) => {
            doc.text(line, margin, cursorY);
            cursorY += 4;
        });

        cursorY += 2;
        doc.setFont(pdfFont, "bold");
        doc.setFontSize(12);
        doc.text("Quotation / Invoice", margin, cursorY);
        cursorY += 6;

        doc.setFont(pdfFont, "normal");
        doc.setFontSize(9);
        const contentWidth = pageWidth - margin * 2;
        const metaGap = 5;
        const metaColumnWidth = (contentWidth - (metaGap * 2)) / 3;
        const metaColumnsX = [
            margin,
            margin + metaColumnWidth + metaGap,
            margin + (metaColumnWidth * 2) + (metaGap * 2)
        ];

        const invoiceNoLines = doc.splitTextToSize(`Invoice No: ${invoiceNumberEl.textContent.trim() || "-"}`, metaColumnWidth);
        const dateLines = doc.splitTextToSize(`Date: ${invoiceDateEl.textContent.trim() || "-"}`, metaColumnWidth);
        const productCountLines = doc.splitTextToSize(`Product Count: ${selectedItems.length}`, metaColumnWidth);

        doc.text(invoiceNoLines, metaColumnsX[0], cursorY);
        doc.text(dateLines, metaColumnsX[1], cursorY);
        doc.text(productCountLines, metaColumnsX[2], cursorY);

        const metaLineHeight = 4;
        const firstMetaRows = Math.max(invoiceNoLines.length, dateLines.length, productCountLines.length);
        cursorY += firstMetaRows * metaLineHeight + 1;

        const totalQuantity = selectedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalQtyLines = doc.splitTextToSize(`Total Qty: ${totalQuantity}`, metaColumnWidth);
        doc.text(totalQtyLines, metaColumnsX[0], cursorY);
        cursorY += totalQtyLines.length * metaLineHeight + 2;

        doc.setDrawColor(226, 232, 240);
        doc.line(margin, cursorY, pageWidth - margin, cursorY);
        cursorY += 6;

        const customerDetailsForPdf = getCustomerDetails();
        doc.text(`Customer Name: ${customerDetailsForPdf.name || "-"}`, margin, cursorY);
        cursorY += 4;
        doc.text(`Mobile Number: ${customerDetailsForPdf.phone || "-"}`, margin, cursorY);
        cursorY += 4;

        const addressLines = doc.splitTextToSize(`Delivery Address: ${customerDetailsForPdf.address || "-"}`, pageWidth - margin * 2);
        doc.text(addressLines, margin, cursorY);
        cursorY += (addressLines.length * 4) + 2;

        let grandTotal = 0;
        let grandOfferTotal = 0;

        const tableBody = selectedItems.map(({ product, quantity }, index) => {
            const pricing = calculatePrices(product, quantity);
            grandTotal += pricing.rowTotal;
            grandOfferTotal += pricing.rowOfferTotal;

            const pricePair = product.isFixedPrice
                ? `${formatAmount(pricing.showcasedOriginalPrice)} (Fixed)`
                : `${formatAmount(pricing.customerOfferPrice)}`;

            return [
                String(index + 1),
                String(product.id),
                productGroupById.get(product.id).replace(/\([^)]*\)/g, '').trim() || "-",
                product.name.replace(/\([^)]*\)/g, '').trim()+' ('+product.per+')',
                pricePair,
                String(quantity),
                formatAmount(pricing.rowOfferTotal)
            ];
        });

        doc.autoTable({
            startY: cursorY,
            margin: { left: margin, right: margin },
            tableWidth: pageWidth - margin * 2,
            head: [["SI.No", "Product Code", "Group", "Product Name", "Price", "Quantity", "Total Offer Amount"]],
            body: tableBody,
            theme: "grid",
            styles: {
                font: pdfFont,
                fontSize: 8,
                cellPadding: 1.8,
                overflow: "linebreak",
                valign: "top"
            },
            headStyles: {
                font: pdfFont,
                fillColor: [248, 250, 252],
                textColor: [31, 41, 55],
                fontStyle: "bold"
            },
            columnStyles: {
                0: { cellWidth: 12 },
                1: { cellWidth: 22 },
                2: { cellWidth: 28 },
                3: { cellWidth: 70, overflow: "linebreak" },
                4: { cellWidth: 48 },
                5: { cellWidth: 18, halign: "right" },
                6: { cellWidth: 34, halign: "right" }
            }
        });

        const summaryStartY = (doc.lastAutoTable?.finalY || cursorY) + 6;
        let summaryY = summaryStartY;

        if (summaryY > pageHeight - (footerReserve + 20)) {
            doc.addPage();
            summaryY = margin;
        }

        doc.setFont(pdfFont, "bold");
        doc.setFontSize(10);
        doc.text(`Grand Total Amount: ${formatAmount(grandTotal)}`, margin, summaryY);
        summaryY += 5;
        doc.text(`Grand Total Offer Amount: ${formatAmount(grandOfferTotal)}`, margin, summaryY);

        summaryY += 7;
        doc.setFontSize(10);
        doc.text("Happy Deepavali!!", margin, summaryY);
        summaryY += 4;
        doc.setFont(pdfFont, "normal");
        doc.setFontSize(9);
        doc.text("1. 100% Advance Payment: Full payment must be made in advance to confirm your order.", margin, summaryY);
        summaryY += 4;
        doc.text("2. Transportation Charges Extra", margin, summaryY);
        summaryY += 4;
        const termThree = doc.splitTextToSize("3. After payment confirmation, your delivery box will be handed over to the transport office the next day", pageWidth - margin * 2);
        doc.text(termThree, margin, summaryY);

        appendPdfAuditTrail(doc, invoiceId, generatedAt, pdfFont);

        const pdfBlob = doc.output("blob");
        console.log("PDF generated:", {
            type: pdfBlob.type,
            size: pdfBlob.size,
            fileName: fileNameBase
        });
        
        if (!pdfBlob || pdfBlob.size === 0) {
            throw new Error("PDF generation returned an empty file.");
        }
        
        downloadPdfBlob(pdfBlob, fileNameBase);

        const whatsappMessage = buildWhatsAppMessage({
            invoiceId,
            customerName: customerDetailsForPdf.name,
            grandOfferTotal,
            generatedAt
        });

       await sharePdfToWhatsApp(pdfBlob, fileNameBase, whatsappMessage, '7010942234');

        showDownloadToast("PDF downloaded");
    } catch (error) {
        console.error("PDF generation failed:", error);
        showDownloadToast("PDF download failed. Check your connection and try again.");
    } finally {
        printButton.disabled = false;
        printButton.textContent = "Download PDF";
    }
}

function testPdfDownload() {
    const blob = new Blob(
        ["PDF download test"],
        { type: "text/plain" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "seyon-download-test.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 5000);
}





function showDownloadToast(message = "Invoice downloaded") {
    if (downloadToastTimer) {
        clearTimeout(downloadToastTimer);
    }

    downloadToastEl.textContent = message;
    downloadToastEl.classList.remove("hidden");
    downloadToastEl.classList.add("toast-visible");

    downloadToastTimer = window.setTimeout(() => {
        downloadToastEl.classList.remove("toast-visible");
        downloadToastEl.classList.add("hidden");
        downloadToastTimer = null;
    }, 2200);
}

function initBasicSourceProtection() {
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    document.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();
        const isCtrlOrMeta = event.ctrlKey || event.metaKey;

        if (event.key === "F12") {
            event.preventDefault();
            return;
        }

        if (isCtrlOrMeta && (key === "u" || key === "s" || key === "p")) {
            event.preventDefault();
        }

        if (event.ctrlKey && event.shiftKey && (key === "i" || key === "j" || key === "c")) {
            event.preventDefault();
        }
    });
}

accordion.addEventListener("input", (event) => {
    if (event.target.classList.contains("quantity")) {
        setQuantityValue(Number(event.target.dataset.id), Math.min(999, Math.max(0, Math.floor(Number(event.target.value) || 0))));
    }
});

accordion.addEventListener("click", (event) => {
    const quantityButton = event.target.closest(".quantity-action");
    if (quantityButton) {
        const productId = quantityButton.dataset.id;
        const input = event.target.closest(".product-card, tr")?.querySelector(`input[data-id="${productId}"]`)
            || document.querySelector(`input[data-id="${productId}"]`);
        if (input) {
            const currentValue = Math.max(0, Number(input.value) || 0);
            const nextValue = quantityButton.dataset.action === "increase"
                ? currentValue + 1
                : currentValue - 1;
            setQuantityValue(Number(productId), nextValue);
        }
        return;
    }

    const trigger = event.target.closest(".accordion-trigger");
    if (!trigger) {
        return;
    }

    const panelId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const expanded = trigger.getAttribute("aria-expanded") === "true";

    trigger.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("open", !expanded);
});

reviewTableBody.addEventListener("input", (event) => {
    if (event.target.classList.contains("quantity")) {
        setQuantityValue(Number(event.target.dataset.id), Math.min(999, Math.max(0, Math.floor(Number(event.target.value) || 0))));
    }
});

reviewTableBody.addEventListener("click", (event) => {
    const quantityButton = event.target.closest(".quantity-action");
    if (!quantityButton) {
        return;
    }

    const productId = Number(quantityButton.dataset.id);
    const input = event.target.closest(".product-card, tr")?.querySelector(`input[data-id="${productId}"]`);
    const currentValue = Math.max(0, Number(input?.value) || 0);
    const nextValue = quantityButton.dataset.action === "increase"
        ? currentValue + 1
        : currentValue - 1;

    setQuantityValue(productId, nextValue);
});

reviewButton.addEventListener("click", () => {
    showReviewScreen();
});

miniCartReviewButton.addEventListener("click", () => {
    if (!reviewScreen.classList.contains("hidden")) {
        showInvoiceScreen();
        return;
    }

    showReviewScreen();
});

miniCartResetButton.addEventListener("click", () => {
    resetSession();
});

webResetButtons.forEach((button) => {
    button.addEventListener("click", () => {
        resetSession();
    });
});

backButton.addEventListener("click", () => {
    showSelectionScreen();
});

invoiceButton.addEventListener("click", () => {
    showInvoiceScreen();
});

invoiceBackButton.addEventListener("click", () => {
    showReviewScreen();
});

printButton.addEventListener("click", () => {
    downloadInvoice();
});

[customerNameEl, customerPhoneEl, customerAddressEl].forEach((field) => {
    field.addEventListener("input", () => {
        validateCustomerDetails();
        persistCustomerDetails();
    });
});

//initBasicSourceProtection();
restoreQuantities();
restoreCustomerDetails();
populateGroupFilter();
renderAccordion();
updateTotals();
showScreen(selectionScreen, "forward");

productSearchEl.addEventListener("input", () => {
    renderAccordion();
    updateTotals();
});

groupFilterEl.addEventListener("change", () => {
    renderAccordion();
    updateTotals();
});

window.addEventListener("scroll", updateMiniCartScrollState, { passive: true });
window.addEventListener("resize", updateMiniCartScrollState);
updateMiniCartScrollState();

// Modern catalog controls and complete WhatsApp order sharing.
if (sortFilterEl) {
    sortFilterEl.addEventListener("change", renderAccordion);
}

const whatsappOrderButton = document.getElementById("whatsappOrderButton");

if (whatsappOrderButton) {
    whatsappOrderButton.addEventListener("click", () => {
        const selected = getSelectedProducts();

        if (!selected.length) {
            alert("Please select at least one product.");
            return;
        }

        const customer = getCustomerDetails();

        // Validate required customer details
        if (!customer.name?.trim()) {
            alert("Please enter your name.");
            customerNameEl.focus();
            return;
        }

        if (!customer.phone?.trim()) {
            alert("Please enter your mobile number.");
            customerPhoneEl.focus();
            return;
        }

        // Validate 10-digit Indian mobile number
        const phone = customer.phone.replace(/\D/g, "");

        if (!/^[6-9]\d{9}$/.test(phone)) {
            alert("Please enter a valid 10-digit mobile number.");
            customerPhoneEl.focus();
            return;
        }

        if (!customer.address?.trim()) {
            alert("Please enter your delivery address.");
            customerAddressEl.focus();
            return;
        }

        // Open WhatsApp only after all validations pass
        const lines = [
            "*Seyon Crackers & Traders — Order Request*",
            "Sivakasi | +91 70109 42234",
            "",
            ...selected.map(({ product, quantity }, index) => {
                const price = calculatePrices(product, quantity);
                return `${index + 1}.(${product.id}) ${product.name} (${product.per || "Unit"}) x ${quantity} = ${formatAmount(price.rowOfferTotal)}`;
            }),
            "",
            `Items: ${selected.length}`,
            `Total offer amount: ${formatAmount(getCurrentGrandOfferTotal())}`,
            `Name: ${customer.name.trim()}`,
            `Mobile: ${phone}`,
            `Address: ${customer.address.trim()}`,
            "",
            "Please confirm availability and delivery charges. Thank you!"
        ];

        const whatsappUrl =
            `https://wa.me/917010942234?text=${encodeURIComponent(lines.join("\n"))}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
}

