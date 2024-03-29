import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  currentCategories = [
    {id: 'shortboard', name: 'Shortboard'},
    {id: 'not_expensive_surf_planks', name: 'Planches pas cher'},
    {id: 'mossy_planks', name: 'Planches en mousse et pour débutants'},
    {id: 'longboard', name: 'Longboard'},
    {id: 'stand_up_paddle', name: 'Stand Up Paddle'},
    {id: 'mini_malibu', name: 'Mini Malibu'},
    {id: 'fish', name: 'Fish'},
    {id: 'hybride', name: 'Hybride'},
    {id: 'egg', name: 'Egg'},
    {id: 'evolutive', name: 'Evolutive'},
    {id: 'gun', name: 'Gun'},
    {id: 'vintage', name: 'Vintage'},
    {id: 'retro', name: 'Retro'},
    {id: 'child', name: 'Child'},
    {id: 'surf_various', name: 'Divers'}
  ]

  currentFrenchRegion = 'null';
  frenchRegions =
  [
    {id: '01',	name: 'Ain'},
    {id: '02',	name: 'Aisne'},
    {id: '03',	name: 'Allier'},
    {id: '04',	name: 'Alpes-de-Haute-Provence'},
    {id: '05',	name: 'Hautes-Alpes'},
    {id: '06',	name: 'Alpes-Maritimes'},
    {id: '07',	name: 'Ardèche'},
    {id: '08',	name: 'Ardennes'},
    {id: '09',	name: 'Ariège'},
    {id: '10',	name: 'Aube'},
    {id: '11',	name: 'Aude'},
    {id: '12',	name: 'Aveyron'},
    {id: '13',	name: 'Bouches-du-Rhône'},
    {id: '14',	name: 'Calvados'},
    {id: '15',	name: 'Cantal'},
    {id: '16',	name: 'Charente'},
    {id: '17',	name: 'Charente-Maritime'},
    {id: '18',	name: 'Cher'},
    {id: '19',	name: 'Corrèze'},
    {id: '2A',	name: 'Corse-du-Sud'},
    {id: '2B',	name: 'Haute-Corse'},
    {id: '21',	name: 'Côte-d\'Or'},
    {id: '22',	name: 'Côtes d\'Armor'},
    {id: '23',	name: 'Creuse'},
    {id: '24',	name: 'Dordogne'},
    {id: '25',	name: 'Doubs'},
    {id: '26',	name: 'Drôme'},
    {id: '27',	name: 'Eure'},
    {id: '28',	name: 'Eure-et-Loir'},
    {id: '29',	name: 'Finistère'},
    {id: '30',	name: 'Gars'},
    {id: '31',	name: 'Haute-Garonne'},
    {id: '32',	name: 'Gers'},
    {id: '33',	name: 'Gironde'},
    {id: '34',	name: 'Hérault'},
    {id: '35',	name: 'Ille-et-Vilaine'},
    {id: '36',	name: 'Indre'},
    {id: '37',	name: 'Indre-et-Loire'},
    {id: '38',	name: 'Isère'},
    {id: '39',	name: 'Jura'},
    {id: '40',	name: 'Landes'},
    {id: '41',	name: 'Loir-et-Cher'},
    {id: '42',	name: 'Loire'},
    {id: '43',	name: 'Haute-Loire'},
    {id: '44',	name: 'Loire-Atlantique'},
    {id: '45',	name: 'Loiret'},
    {id: '46',	name: 'Lot'},
    {id: '47',	name: 'Lot-et-Garonne'},
    {id: '48',	name: 'Lozère'},
    {id: '49',	name: 'Maine-et-Loire'},
    {id: '50',	name: 'Manche'},
    {id: '51',	name: 'Marne'},
    {id: '52',	name: 'Haute-Marne'},
    {id: '53',	name: 'Mayenne'},
    {id: '54',	name: 'Meurthe-et-Moselle'},
    {id: '55',	name: 'Meuse'},
    {id: '56',	name: 'Morbihan'},
    {id: '57',	name: 'Moselle'},
    {id: '58',	name: 'Nièvre'},
    {id: '59',	name: 'Nord'},
    {id: '60',	name: 'Oise'},
    {id: '61',	name: 'Orne'},
    {id: '62',	name: 'Pas-de-Calais'},
    {id: '63',	name: 'Puy-de-Dôme'},
    {id: '64',	name: 'Pyrénées-Atlantiques'},
    {id: '65',	name: 'Hautes-Pyrénées'},
    {id: '66',  name: 'Pyrénées-Orientales'},
    {id: '67',	name: 'Bas-Rhin'},
    {id: '68',	name: 'Haut-Rhin'},
    {id: '69',	name: 'Rhône'},
    {id: '70',	name: 'Haute-Saône'},
    {id: '71',	name: 'Saône-et-Loire'},
    {id: '72',	name: 'Sarthe'},
    {id: '73',	name: 'Savoie'},
    {id: '74',	name: 'Haute-Savoie'},
    {id: '75',	name: 'Paris'},
    {id: '76',	name: 'Seine-Maritime'},
    {id: '77',	name: 'Seine-et-Marne'},
    {id: '78',	name: 'Yvelines'},
    {id: '79',	name: 'Deux-Sèvres'},
    {id: '80',	name: 'Somme'},
    {id: '81',	name: 'Tarn'},
    {id: '82',	name: 'Tarn-et-Garonne'},
    {id: '83',	name: 'Var'},
    {id: '84',	name: 'Vaucluse'},
    {id: '85',	name: 'Vandée'},
    {id: '86',	name: 'Vienne'},
    {id: '87',	name: 'Haute-Vienne'},
    {id: '88',	name: 'Vosges'},
    {id: '89',	name: 'Yonne'},
    {id: '90',	name: 'Territoire de Belfort'},
    {id: '91',	name: 'Essonne'},
    {id: '92',	name: 'Hauts-de-Seine'},
    {id: '93',	name: 'Seine-St-Denis'},
    {id: '94',	name: 'Val-de-Marne'},
    {id: '95',	name: 'Val-D\'Oise'},
    {id: '971',	name: 'Guadeloupe'},
    {id: '972',	name: 'Martinique'},
    {id: '973',	name: 'Guyane'},
    {id: '974',	name: 'La Réunion'},
    {id: '976',	name: 'Mayotte'}
  ];

}
