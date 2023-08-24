const columns = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'class',
    label: 'Class',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

const characters = [
  {
    key: '1',
    name: 'Tav',
    race: 'Dwarf',
    class: 'Paladin',
    level: 6,
    status: 'active',
    avatarUrl: 'https://bg3.wiki/w/images/2/21/Custom_Character_Portrait.png',
  },
  {
    key: '2',
    name: 'Gale',
    class: 'Wizard',
    race: 'Human',
    level: 1,
    status: 'dead',
    avatarUrl: 'https://bg3.wiki/w/images/3/3f/Gale_Portrait.png',
  },
  {
    key: '3',
    name: 'Shadowheart',
    class: 'Cleric',
    race: 'Half-Elf',
    level: 3,
    status: 'stunned',
    avatarUrl: 'https://bg3.wiki/w/images/6/6a/Shadowheart_Portrait.png',
  },
  {
    key: '4',
    name: 'Astarion',
    race: 'Elf',
    class: 'Rogue',
    level: 4,
    status: 'dazed',
    avatarUrl: 'https://bg3.wiki/w/images/0/01/Astarion_Portrait.png',
  },
];

export {columns, characters}
