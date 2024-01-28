import { CardActionArea, CardActions } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'

import CodeBurger from '../../assets/codeburger.png'
import DevHamburgueria from '../../assets/devhamburger.png'
import Tempo from '../../assets/tempo.png'
import { ContainerMain, InfoContainer, ContainerProjects } from './styles'

export function Projetos() {
  return (
    <div>
      <ContainerMain>
        <InfoContainer>
          <h3>Projetos Recentes</h3>
          <h1>Meu Portfolio</h1>
        </InfoContainer>

        <ContainerProjects>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={CodeBurger}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CodeBurger
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Site completo de Hamburgueria, com sistema de login, pedidos e
                  carrinho, com API própria
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                target="_blank"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7142666715657637890/"
                style={{
                  backgroundColor: 'green',
                  color: '#fff',
                  fontSize: 20,
                  padding: 10,
                  textAlign: 'center',
                  borderRadius: 5,
                  width: 80,
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                rel="noreferrer"
              >
                Abrir
              </a>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={DevHamburgueria}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  DevHamburgueria
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Site completo de Hamburgueria, com sistema de login, pedidos e
                  carrinho, com API própria
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                target="_blank"
                href="https://caiomiranda12.github.io/DevHamburgueria/"
                style={{
                  backgroundColor: 'green',
                  color: '#fff',
                  fontSize: 20,
                  padding: 10,
                  textAlign: 'center',
                  borderRadius: 5,
                  width: 80,
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                rel="noreferrer"
              >
                Abrir
              </a>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Tempo}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Previsão de Tempo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Site completo de Hamburgueria, com sistema de login, pedidos e
                  carrinho, com API própria
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                target="_blank"
                href="https://caiomiranda12.github.io/PrevisaoDoTempo/"
                style={{
                  backgroundColor: 'green',
                  color: '#fff',
                  fontSize: 20,
                  padding: 10,
                  textAlign: 'center',
                  borderRadius: 5,
                  width: 80,
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                rel="noreferrer"
              >
                Abrir
              </a>
            </CardActions>
          </Card>
        </ContainerProjects>
      </ContainerMain>
    </div>
  )
}
