import { v4 as uuidv4 } from "uuid";

const art = [
  {
    id: uuidv4(),
    title: "Mountain Serenity",
    artist: "Ella Turner",
    year: 2022,
    medium: "print",
    size: {
      small: {
        width: "30",
        height: "20",
      },
      medium: {
        width: "45",
        height: "30",
      },
      large: {
        width: "60",
        height: "40",
      },
    },
    unit: "inches",
    price: 200,
    currency: "USD",
    description:
      "A tranquil mountain landscape with a clear blue lake in the foreground under a calm sky.",
    aspectRatio: "30:20",
    image: "/images/mountain-serenity.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Sunset Over Fields",
    artist: "Tom Green",
    year: 2020,
    medium: "print",
    size: {
      small: {
        width: "34",
        height: "23",
      },
      medium: {
        width: "51",
        height: "34.5",
      },
      large: {
        width: "68",
        height: "46",
      },
    },
    unit: "inches",
    price: 180,
    currency: "USD",
    description:
      "Vibrant sunset illuminating the golden fields with shades of orange and red.",
    aspectRatio: "34:23",
    image: "/images/sunset-over-fields.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Autumn Whisper",
    artist: "Sarah McCoy",
    year: 2023,
    medium: "print",
    size: {
      small: {
        width: "32",
        height: "24",
      },
      medium: {
        width: "48",
        height: "36",
      },
      large: {
        width: "64",
        height: "48",
      },
    },
    unit: "inches",
    price: 190,
    currency: "USD",
    description:
      "A soft depiction of a forest in autumn, with leaves gently falling in a serene setting.",
    aspectRatio: "32:24",
    image: "/images/autumn-whisper.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Winter's Glow",
    artist: "Mike Johnson",
    year: 2021,
    medium: "print",
    size: {
      small: {
        width: "40",
        height: "25",
      },
      medium: {
        width: "60",
        height: "37.5",
      },
      large: {
        width: "80",
        height: "50",
      },
    },
    unit: "inches",
    price: 210,
    currency: "USD",
    description:
      "Snow-covered trees under a night sky, lit by the soft glow of the moon.",
    aspectRatio: "40:25",
    image: "/images/winters-glow.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Desert Mirage",
    artist: "Claire Robertson",
    year: 2019,
    medium: "print",
    size: {
      small: {
        width: "36",
        height: "24",
      },
      medium: {
        width: "54",
        height: "36",
      },
      large: {
        width: "72",
        height: "48",
      },
    },
    unit: "inches",
    price: 160,
    currency: "USD",
    description:
      "A surreal landscape of the desert with mirage effects on the horizon.",
    aspectRatio: "36:24",
    image: "/images/desert-mirage.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Coastal Breeze",
    artist: "Lily White",
    year: 2022,
    medium: "print",
    size: {
      small: {
        width: "35",
        height: "25",
      },
      medium: {
        width: "52.5",
        height: "37.5",
      },
      large: {
        width: "70",
        height: "50",
      },
    },
    unit: "inches",
    price: 250,
    currency: "USD",
    description:
      "The gentle sea waves touching a rocky shore under a clear sky.",
    aspectRatio: "35:25",
    image: "/images/coastal-breeze.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Lakeside Calm",
    artist: "Emma Clark",
    year: 2022,
    medium: "print",
    size: {
      small: {
        width: "36",
        height: "24",
      },
      medium: {
        width: "54",
        height: "36",
      },
      large: {
        width: "72",
        height: "48",
      },
    },
    unit: "inches",
    price: 175,
    currency: "USD",
    description:
      "A serene lakeside view, reflecting the surrounding trees and sky.",
    aspectRatio: "36:24",
    image: "/images/lakeside-calm.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Misty Valley",
    artist: "George Ellis",
    year: 2020,
    medium: "print",
    size: {
      small: {
        width: "34",
        height: "24",
      },
      medium: {
        width: "51",
        height: "36",
      },
      large: {
        width: "68",
        height: "48",
      },
    },
    unit: "inches",
    price: 190,
    currency: "USD",
    description:
      "A peaceful valley shrouded in early morning mist, captured with delicate brush strokes.",
    aspectRatio: "34:24",
    image: "/images/misty-valley.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Canyon Colors",
    artist: "James Peterson",
    year: 2024,
    medium: "acrylic",
    size: {
      small: {
        width: "25",
        height: "30",
      },
      medium: {
        width: "37.5",
        height: "45",
      },
      large: {
        width: "50",
        height: "60",
      },
    },
    unit: "inches",
    price: 270,
    currency: "USD",
    description:
      "Rich hues of red and orange dominate this vibrant portrayal of a desert canyon.",
    aspectRatio: "25:30",
    image: "/images/canyon-colors.png",
    type: "portrait",
  },
  {
    id: uuidv4(),
    title: "Forest Retreat",
    artist: "Nancy Smith",
    year: 2022,
    medium: "watercolor",
    size: {
      small: {
        width: "20",
        height: "28",
      },
      medium: {
        width: "30",
        height: "42",
      },
      large: {
        width: "40",
        height: "56",
      },
    },
    unit: "inches",
    price: 230,
    currency: "USD",
    description:
      "A secluded woodland path dappled with light, inviting peaceful contemplation.",
    aspectRatio: "20:28",
    image: "/images/forest-retreat.png",
    type: "portrait",
  },
  {
    id: uuidv4(),
    title: "Ocean Dawn",
    artist: "Richard Lee",
    year: 2023,
    medium: "oil",
    size: {
      small: {
        width: "24",
        height: "18",
      },
      medium: {
        width: "36",
        height: "27",
      },
      large: {
        width: "48",
        height: "36",
      },
    },
    unit: "inches",
    price: 290,
    currency: "USD",
    description:
      "The early morning sun casts a golden glow over a calm, reflective ocean.",
    aspectRatio: "24:18",
    image: "/images/ocean-dawn.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Meadow Morning",
    artist: "Claire Thompson",
    year: 2021,
    medium: "print",
    size: {
      small: {
        width: "34",
        height: "22",
      },
      medium: {
        width: "51",
        height: "33",
      },
      large: {
        width: "68",
        height: "44",
      },
    },
    unit: "inches",
    price: 185,
    currency: "USD",
    description:
      "Early morning dew sparkles on wildflowers in a sunlit meadow.",
    aspectRatio: "34:22",
    image: "/images/meadow-morning.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Highland Vista",
    artist: "Robert Wilson",
    year: 2024,
    medium: "acrylic",
    size: {
      small: {
        width: "36",
        height: "24",
      },
      medium: {
        width: "54",
        height: "36",
      },
      large: {
        width: "72",
        height: "48",
      },
    },
    unit: "inches",
    price: 280,
    currency: "USD",
    description:
      "Expansive views of rolling highland hills under a dynamic, stormy sky.",
    aspectRatio: "36:24",
    image: "/images/highland-vista.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Snow Peak Solitude",
    artist: "Mark Andrews",
    year: 2025,
    medium: "print",
    size: {
      small: {
        width: "30",
        height: "22",
      },
      medium: {
        width: "45",
        height: "33",
      },
      large: {
        width: "60",
        height: "44",
      },
    },
    unit: "inches",
    price: 260,
    currency: "USD",
    description:
      "A solitary peak, blanketed in snow, stands majestically against a clear blue sky.",
    aspectRatio: "30:22",
    image: "/images/snow-peak-solitude.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Autumn River Bend",
    artist: "Laura Garcia",
    year: 2024,
    medium: "watercolor",
    size: {
      small: {
        width: "28",
        height: "20",
      },
      medium: {
        width: "42",
        height: "30",
      },
      large: {
        width: "56",
        height: "40",
      },
    },
    unit: "inches",
    price: 220,
    currency: "USD",
    description:
      "A winding river cuts through a colorful autumn landscape, reflecting the changing leaves.",
    aspectRatio: "28:20",
    image: "/images/autumn-river-bend.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Forest Whispers",
    artist: "Nora Kim",
    year: 2023,
    medium: "print",
    size: {
      small: {
        width: "28",
        height: "18",
      },
      medium: {
        width: "42",
        height: "28",
      },
      large: {
        width: "56",
        height: "37",
      },
    },
    unit: "inches",
    price: 180,
    currency: "USD",
    description:
      "A dense, green forest shrouded in morning mist, with sunlight filtering through the trees.",
    aspectRatio: "28:18",
    image: "/images/forest-whispers.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Desert Glow",
    artist: "Ahmed Reyes",
    year: 2023,
    medium: "print",
    size: {
      small: {
        width: "32",
        height: "24",
      },
      medium: {
        width: "48",
        height: "36",
      },
      large: {
        width: "64",
        height: "48",
      },
    },
    unit: "inches",
    price: 210,
    currency: "USD",
    description:
      "A vibrant sunset casting golden hues over a sprawling desert landscape.",
    aspectRatio: "32:24",
    image: "/images/desert-glow.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Ocean's Horizon",
    artist: "Lucy Chen",
    year: 2024,
    medium: "print",
    size: {
      small: {
        width: "30",
        height: "20",
      },
      medium: {
        width: "45",
        height: "30",
      },
      large: {
        width: "60",
        height: "40",
      },
    },
    unit: "inches",
    price: 190,
    currency: "USD",
    description:
      "The endless ocean meets a dramatic sky at the horizon, capturing the essence of the sea's tranquility.",
    aspectRatio: "30:20",
    image: "/images/oceans-horizon.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Golden Fields",
    artist: "Mark Thompson",
    year: 2022,
    medium: "print",
    size: {
      small: {
        width: "34",
        height: "22",
      },
      medium: {
        width: "51",
        height: "34",
      },
      large: {
        width: "68",
        height: "45",
      },
    },
    unit: "inches",
    price: 200,
    currency: "USD",
    description:
      "Rolling hills covered in golden wheat, swaying gently under a clear blue sky.",
    aspectRatio: "34:22",
    image: "/images/golden-fields.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Snowy Peaks",
    artist: "Elena Rodriguez",
    year: 2023,
    medium: "print",
    size: {
      small: {
        width: "30",
        height: "20",
      },
      medium: {
        width: "45",
        height: "30",
      },
      large: {
        width: "60",
        height: "40",
      },
    },
    unit: "inches",
    price: 220,
    currency: "USD",
    description:
      "Majestic snow-capped mountains under a star-filled night sky.",
    aspectRatio: "30:20",
    image: "/images/snowy-peaks.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Autumn River",
    artist: "Tom Sanders",
    year: 2024,
    medium: "print",
    size: {
      small: {
        width: "29",
        height: "19",
      },
      medium: {
        width: "43.5",
        height: "29",
      },
      large: {
        width: "58",
        height: "38.5",
      },
    },
    unit: "inches",
    price: 195,
    currency: "USD",
    description:
      "A serene river flanked by trees displaying vibrant autumn colors.",
    aspectRatio: "29:19",
    image: "/images/autumn-river.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Twilight Vineyard",
    artist: "Sofia Martinez",
    year: 2023,
    medium: "print",
    size: {
      small: {
        width: "26",
        height: "17",
      },
      medium: {
        width: "39",
        height: "26",
      },
      large: {
        width: "52",
        height: "34.5",
      },
    },
    unit: "inches",
    price: 205,
    currency: "USD",
    description:
      "A sprawling vineyard at twilight, with rows of grapevines under a fading purple sky.",
    aspectRatio: "26:17",
    image: "/images/twilight-vineyard.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Misty Highlands",
    artist: "Ian Murphy",
    year: 2022,
    medium: "print",
    size: {
      small: {
        width: "31",
        height: "21",
      },
      medium: {
        width: "46.5",
        height: "31",
      },
      large: {
        width: "62",
        height: "41",
      },
    },
    unit: "inches",
    price: 180,
    currency: "USD",
    description:
      "Fog envelops the highlands, with distant mountains barely visible through the haze.",
    aspectRatio: "31:21",
    image: "/images/misty-highlands.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Lunar Lake",
    artist: "Chloe Patel",
    year: 2024,
    medium: "print",
    size: {
      small: {
        width: "27",
        height: "18",
      },
      medium: {
        width: "40.5",
        height: "27",
      },
      large: {
        width: "54",
        height: "36",
      },
    },
    unit: "inches",
    price: 210,
    currency: "USD",
    description:
      "A peaceful lake reflects the full moon, surrounded by dark silhouettes of trees.",
    aspectRatio: "27:18",
    image: "/images/lunar-lake.png",
    type: "landscape",
  },
  {
    id: uuidv4(),
    title: "Sunset Cliffs",
    artist: "Jason Lee",
    year: 2023,
    medium: "print",
    size: {
      small: {
        width: "33",
        height: "22",
      },
      medium: {
        width: "49.5",
        height: "33",
      },
      large: {
        width: "66",
        height: "44",
      },
    },
    unit: "inches",
    price: 200,
    currency: "USD",
    description:
      "Dramatic cliffs overlooking the ocean, with the sun setting in a fiery display of colors.",
    aspectRatio: "33:22",
    image: "/images/sunset-cliffs.png",
    type: "landscape",
  },
];

export default art;
