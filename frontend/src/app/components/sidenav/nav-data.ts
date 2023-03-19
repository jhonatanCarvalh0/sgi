import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  //Dashboard
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard',
  },
  //Bens móveis
  {
    routeLink: 'bens-moveis',
    icon: 'fal fa-box-open',
    label: 'Bens móveis',
    items: [
      {
        routeLink: 'bens-moveis/ingresso',
        label: 'Ingresso de Bens Móveis',
      },
      {
        routeLink: 'bens-moveis/incorporacao',
        label: 'Incorporação de Bens Móveis',
      },
      {
        routeLink: 'bens-moveis/inventario',
        label: 'Inventário',
      },
      {
        routeLink: 'bens-moveis/desfazimento-baixa',
        label: 'Desfazimento/Baixa',
      },
      {
        routeLink: 'bens-moveis/ingresso-saida-temporaria',
        label: 'Ingresso e Saída Temporária',
      },
      {
        routeLink: 'bens-moveis/procedimentos-contabeis',
        label: 'Procedimentos contábeis',
        items: [
          {
            routeLink: 'bens-moveis/procedimentos-contabeis/avaliacao',
            label: 'Avaliação',
          },
          {
            routeLink: 'bens-moveis/procedimentos-contabeis/reavaliacao',
            label: 'Reavaliação',
          },
          {
            routeLink: 'bens-moveis/procedimentos-contabeis/reducao-ao-valor-recuperavel',
            label: 'Redução ao valor recuperável',
          },
          {
            routeLink: 'bens-moveis/procedimentos-contabeis/depreciacao',
            label: 'Depreciação',
          },
          {
            routeLink: 'bens-moveis/procedimentos-contabeis/amortizacao',
            label: 'Amortização',
          },
          {
            routeLink: 'bens-moveis/procedimentos-contabeis/exaustao',
            label: 'Exaustão',
          },
        ],
      },
    ],
  },
  //Settings
  {
    routeLink: 'settings',
    icon: 'fal fa-cog',
    label: 'Settings',
    expanded: true,
    items: [
      {
        routeLink: 'settings/profile',
        label: 'Profile',
      },
      {
        routeLink: 'settings/customize',
        label: 'Customize',
      },
    ],
  },
];
