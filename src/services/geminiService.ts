import { GoogleGenAI, Type } from "@google/genai";
import { TrendSuggestion } from "../types.ts";

// Safe access to import.meta.env for Vite environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export const getModernNailTrends = async (): Promise<TrendSuggestion[]> => {
  // Always use fallback trends for now to avoid API issues
  console.log("Using fallback trends for stability");
  return [
    { title: "Sparkling Velvet", description: "Magnetic shimmer that dances in the light.", elements: ["Pink Shimmer", "Magnetic Gel", "Heart Accents"] },
    { title: "Coquette Aesthetic", description: "Ultra-girlish charms and bows for the modern doll.", elements: ["3D Bows", "Pearl Details", "Soft Pink Base"] },
    { title: "Glitter Gradient", description: "A seamless blend of luxury sparkle.", elements: ["Rose Gold Glitter", "Ombre Effect", "Glossy Finish"] }
  ];

  // Commented out API call for now to ensure app loads
  /*
  if (!apiKey) {
    console.warn("Gemini API Key missing, using fallback trends.");
    return [
      { title: "Sparkling Velvet", description: "Magnetic shimmer that dances in the light.", elements: ["Pink Shimmer", "Magnetic Gel", "Heart Accents"] },
      { title: "Coquette Aesthetic", description: "Ultra-girlish charms and bows for the modern doll.", elements: ["3D Bows", "Pearl Details", "Soft Pink Base"] },
      { title: "Glitter Gradient", description: "A seamless blend of luxury sparkle.", elements: ["Rose Gold Glitter", "Ombre Effect", "Glossy Finish"] }
    ];
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Research top 3 modern girlish nail trends for 2025. Focus on Pink, Glitter, and Stylish designs. Include title, description, and elements.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              elements: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["title", "description", "elements"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);
  } catch (error) {
    console.error("Error fetching nail trends:", error);
    return [];
  }
  */
};