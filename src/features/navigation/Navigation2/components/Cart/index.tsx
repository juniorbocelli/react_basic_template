import React from 'react';
import {
  Box,
  Drawer,
  Divider,
  IconButton,
  Typography,
  Button,

  useTheme,
  colors,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import { IUseStates } from '../../states';

const Cart: React.FC<IUseStates> = (states) => {
  const theme = useTheme();

  const {
    isMobileCartOpen,
    setIsMobileCartOpen,
  } = states;

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsMobileCartOpen(open);
    };

  return (
    <div>
      <Drawer
        anchor='right'
        open={isMobileCartOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={
          {
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '100%', md: 700 }, height: '100%' },
          }
        }
      >
        {/* Cart content */}
        <Box
          sx={{ flexShrink: { sm: 0 }, height: '100vh' }}
          aria-label="Dados do carrinho de compra"
        >
          {/* Close Button */}
          <Box
            sx={
              {
                position: 'fixed',
                top: 0,
                backgroundColor: 'white',
                zIndex: 100,
                width: { xs: '100%', md: 700 },
              }
            }
          >
            <Box
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <IconButton
                color="inherit"
                aria-label="close drawer"
                edge="start"
                onClick={toggleDrawer(false)}
                size="large"
                sx={{ ml: theme.spacing(1), width: '50px', height: '50px' }}
              >
                <CloseIcon sx={{ fontSize: '2.7rem' }} />
              </IconButton>
              <Typography
                variant='h5'
                component='div'
                color={theme.palette.primary.dark}

                sx={{fontWeight: 600}}
                >
                Carrinho
              </Typography>
            </Box>
            <Divider />
          </Box>

          {/* Cart itens */}
          <Box
            sx={
              {
                p: theme.spacing(1),
                pt: { xs: '60px', md: '60px' },
                pb: { xs: '70px', md: '90px' }
              }
            }
            aria-label="Itens do carrinho de compra"
          >
            
          </Box>

          {/* Total */}
          <Box
            sx={
              {
                position: 'fixed',
                bottom: 0,
                backgroundColor: colors.grey['200'],
                height: { xs: '65px', md: '90px' },
                width: { xs: '100%', md: 700 },
                display: 'flex',
                justifyContent: 'space-between',
                p: { xs: theme.spacing(1), md: theme.spacing(1) },
                pt: { md: theme.spacing(1.5) },
              }
            }>
            <Box>
              <Typography
                variant='body2'
                color='text.secondary'
              >
                {`0 itens`}
              </Typography>

              <Typography
                variant='h4'
                component='div'
                color='text.secondary'

                sx={
                  {
                    fontWeight: 600,
                    fontSize: { xs: '1.3rem', md: '1.8rem' }
                  }
                }
              >
                {`R$ 0,00`}
              </Typography>
            </Box>

            <Button
              color='primary'
              variant='contained'
              sx={
                {
                  height: { xs: '30px', md: '50px' },
                  fontSize: { xs: '0.8rem' }
                }
              }

              disabled={false}
            >
              Finalizar Compra
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default Cart;