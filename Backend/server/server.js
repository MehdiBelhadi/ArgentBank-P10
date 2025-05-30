const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocs = yaml.load('./swagger.yaml')
const dbConnection = require('./database/connection')

dotEnv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Connexion à la base de données
dbConnection()

// Gérer les problèmes CORS (Cross-Origin Resource Sharing)
app.use(cors())

// Requete payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Gestion des routes personnalisées pour les utilisateurs
app.use('/api/v1/user', require('./routes/userRoutes'))

// API Documentation
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

// Route racine simple pour tester le serveur
app.get('/', (req, res, next) => {
  res.send('Bienvenue sur mon serveur!')
})

// Démarrage du serveur sur le port défini
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
