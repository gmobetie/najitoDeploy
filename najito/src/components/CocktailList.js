import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CocktailService from "../services/cocktailService";
import CardMedia from "@mui/material/CardMedia";

const style = {
  p: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

export default function ListDividers() {
  const [cocktails, setCocktails] = useState([]);

  // Fonction pour charger et rafraîchir les cocktails
  const refreshCocktails = async () => {
    try {
      const updatedCocktails = await CocktailService.searchCocktailsByName("");
      setCocktails(updatedCocktails);
    } catch (error) {
      console.error("Error refreshing cocktails:", error);
    }
  };

  useEffect(() => {
    // Chargez les cocktails initiaux lors du montage du composant
    refreshCocktails();

    // Définir un intervalle pour rafraîchir automatiquement les cocktails toutes les 5 minutes par exemple
    const interval = setInterval(refreshCocktails, 300000); // 5 minutes en millisecondes

    // Nettoyage de l'intervalle lors du démontage du composant pour éviter les fuites de mémoire
    return;
  }); // Le tableau vide en second argument signifie que cet effet ne s'exécute qu'une seule fois après le montage initial

  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      {cocktails.map((cocktail) => (
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              {cocktail.id}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {cocktail.name}
            </Typography>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            {cocktail.instructions}
          </Typography>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={cocktail.image}
            alt="Live from space album cover"
          />
          <Divider />
        </Box>
      ))}
    </Card>
  );
}
