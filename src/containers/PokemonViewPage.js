import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PokemonView from '../components/PokemonView';

const dataPokemon = {
  forms: [
    {
      url: 'https://pokeapi.co/api/v2/pokemon-form/6/',
      name: 'charizard'
    }
  ],
  abilities: [
    {
      slot: 3,
      is_hidden: true,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/94/',
        name: 'solar-power'
      }
    },
    {
      slot: 1,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/66/',
        name: 'blaze'
      }
    }
  ],
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed'
      },
      effort: 0,
      base_stat: 100
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense'
      },
      effort: 0,
      base_stat: 85
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack'
      },
      effort: 3,
      base_stat: 109
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/3/',
        name: 'defense'
      },
      effort: 0,
      base_stat: 78
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/2/',
        name: 'attack'
      },
      effort: 0,
      base_stat: 84
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/1/',
        name: 'hp'
      },
      effort: 0,
      base_stat: 78
    }
  ],
  name: 'charizard',
  weight: 905,
  moves: [
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/5/',
        name: 'mega-punch'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/7/',
        name: 'fire-punch'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/9/',
        name: 'thunder-punch'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/10/',
        name: 'scratch'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/14/',
        name: 'swords-dance'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/15/',
        name: 'cut'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/17/',
        name: 'wing-attack'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/19/',
        name: 'fly'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/25/',
        name: 'mega-kick'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/29/',
        name: 'headbutt'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/34/',
        name: 'body-slam'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/36/',
        name: 'take-down'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/38/',
        name: 'double-edge'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 15,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 15,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/43/',
        name: 'leer'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/45/',
        name: 'growl'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/46/',
        name: 'roar'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 9,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 9,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 7,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/52/',
        name: 'ember'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 47,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 47,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 47,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 34,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 34,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 47,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 42,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 42,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 47,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 34,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 34,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 34,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 34,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 34,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 42,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 46,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 46,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/53/',
        name: 'flamethrower'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/63/',
        name: 'hyper-beam'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/66/',
        name: 'submission'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/68/',
        name: 'counter'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/69/',
        name: 'seismic-toss'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/70/',
        name: 'strength'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/76/',
        name: 'solar-beam'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 54,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 54,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 54,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 54,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 54,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 17,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 17,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 17,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 17,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 54,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 54,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 17,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 17,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 17,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 17,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/82/',
        name: 'dragon-rage'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 55,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 55,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 64,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 64,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 64,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 64,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 64,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 49,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 49,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 49,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 56,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 64,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 64,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 56,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 56,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 56,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 56,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/83/',
        name: 'fire-spin'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/89/',
        name: 'earthquake'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/90/',
        name: 'fissure'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/91/',
        name: 'dig'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/92/',
        name: 'toxic'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 24,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 24,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 20,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 20,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 20,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 20,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 20,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 20,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/99/',
        name: 'rage'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/102/',
        name: 'mimic'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/104/',
        name: 'double-team'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 13,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 13,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 13,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 13,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 20,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 10,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 10,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 10,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 10,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 13,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 13,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 10,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 10,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 10,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 10,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/108/',
        name: 'smokescreen'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/111/',
        name: 'defense-curl'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/115/',
        name: 'reflect'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/117/',
        name: 'bide'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/126/',
        name: 'fire-blast'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/129/',
        name: 'swift'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/130/',
        name: 'skull-bash'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/156/',
        name: 'rest'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/157/',
        name: 'rock-slide'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 36,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 44,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 44,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 44,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 44,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 44,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 32,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 32,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 32,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 41,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 44,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 44,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 41,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 41,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 41,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 41,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/163/',
        name: 'slash'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/2/',
            name: 'yellow'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/1/',
            name: 'red-blue'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/164/',
        name: 'substitute'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/173/',
        name: 'snore'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/174/',
        name: 'curse'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/182/',
        name: 'protect'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 21,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 21,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 21,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 21,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 27,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 27,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 21,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 21,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 21,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 27,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 27,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 27,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 27,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 27,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 21,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/184/',
        name: 'scary-face'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/189/',
        name: 'mud-slap'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/200/',
        name: 'outrage'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/201/',
        name: 'sandstorm'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/203/',
        name: 'endure'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/207/',
        name: 'swagger'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/210/',
        name: 'fury-cutter'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/211/',
        name: 'steel-wing'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/213/',
        name: 'attract'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/214/',
        name: 'sleep-talk'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/216/',
        name: 'return'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/218/',
        name: 'frustration'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/223/',
        name: 'dynamic-punch'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/225/',
        name: 'dragon-breath'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/231/',
        name: 'iron-tail'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 13,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/232/',
        name: 'metal-claw'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/237/',
        name: 'hidden-power'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/239/',
        name: 'twister'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/241/',
        name: 'sunny-day'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/4/',
            name: 'crystal'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/3/',
            name: 'gold-silver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/249/',
        name: 'rock-smash'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 59,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 59,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 59,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 71,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 71,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 71,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 71,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 71,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/257/',
        name: 'heat-wave'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/261/',
        name: 'will-o-wisp'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/263/',
        name: 'facade'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/264/',
        name: 'focus-punch'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/280/',
        name: 'brick-break'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/290/',
        name: 'secret-power'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/307/',
        name: 'blast-burn'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/314/',
        name: 'air-cutter'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/315/',
        name: 'overheat'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/317/',
        name: 'rock-tomb'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/332/',
        name: 'aerial-ace'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/5/',
            name: 'ruby-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/6/',
            name: 'emerald'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/7/',
            name: 'firered-leafgreen'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/12/',
            name: 'colosseum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/13/',
            name: 'xd'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/337/',
        name: 'dragon-claw'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/355/',
        name: 'roost'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/363/',
        name: 'natural-gift'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/366/',
        name: 'tailwind'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/374/',
        name: 'fling'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 66,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 66,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 66,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 77,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 77,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 77,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 77,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 77,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/394/',
        name: 'flare-blitz'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/403/',
        name: 'air-slash'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/406/',
        name: 'dragon-pulse'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/411/',
        name: 'focus-blast'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/416/',
        name: 'giga-impact'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 1,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/421/',
        name: 'shadow-claw'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 28,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 28,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 28,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 28,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 28,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 28,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 28,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 28,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/424/',
        name: 'fire-fang'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/432/',
        name: 'defog'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/8/',
            name: 'diamond-pearl'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/445/',
        name: 'captivate'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/9/',
            name: 'platinum'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/10/',
            name: 'heartgold-soulsilver'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/466/',
        name: 'ominous-wind'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/468/',
        name: 'hone-claws'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 32,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 32,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 32,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 32,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 32,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/481/',
        name: 'flame-burst'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/488/',
        name: 'flame-charge'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/496/',
        name: 'round'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/497/',
        name: 'echoed-voice'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/507/',
        name: 'sky-drop'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/510/',
        name: 'incinerate'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 62,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 62,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 62,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 62,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            name: 'level-up'
          },
          level_learned_at: 62,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/517/',
        name: 'inferno'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
            name: 'tutor'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/519/',
        name: 'fire-pledge'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/523/',
        name: 'bulldoze'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/11/',
            name: 'black-white'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/14/',
            name: 'black-2-white-2'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/525/',
        name: 'dragon-tail'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/526/',
        name: 'work-up'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/590/',
        name: 'confide'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/15/',
            name: 'x-y'
          }
        },
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/16/',
            name: 'omega-ruby-alpha-sapphire'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/612/',
        name: 'power-up-punch'
      }
    },
    {
      version_group_details: [
        {
          move_learn_method: {
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            name: 'machine'
          },
          level_learned_at: 0,
          version_group: {
            url: 'https://pokeapi.co/api/v2/version-group/17/',
            name: 'sun-moon'
          }
        }
      ],
      move: {
        url: 'https://pokeapi.co/api/v2/move/693/',
        name: 'brutal-swing'
      }
    }
  ],
  sprites: {
    back_female: null,
    back_shiny_female: null,
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
    front_female: null,
    front_shiny_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png',
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png'
  },
  held_items: [],
  location_area_encounters: '/api/v2/pokemon/6/encounters',
  height: 17,
  is_default: true,
  species: {
    url: 'https://pokeapi.co/api/v2/pokemon-species/6/',
    name: 'charizard'
  },
  id: 6,
  order: 7,
  game_indices: [
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/22/',
        name: 'white-2'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/21/',
        name: 'black-2'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/18/',
        name: 'white'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/17/',
        name: 'black'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/16/',
        name: 'soulsilver'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/15/',
        name: 'heartgold'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/14/',
        name: 'platinum'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/13/',
        name: 'pearl'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/12/',
        name: 'diamond'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/11/',
        name: 'leafgreen'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/10/',
        name: 'firered'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/9/',
        name: 'emerald'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/8/',
        name: 'sapphire'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/7/',
        name: 'ruby'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/6/',
        name: 'crystal'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/5/',
        name: 'silver'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/4/',
        name: 'gold'
      },
      game_index: 6
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/3/',
        name: 'yellow'
      },
      game_index: 180
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/2/',
        name: 'blue'
      },
      game_index: 180
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/1/',
        name: 'red'
      },
      game_index: 180
    }
  ],
  base_experience: 240,
  types: [
    {
      slot: 2,
      type: {
        url: 'https://pokeapi.co/api/v2/type/3/',
        name: 'flying'
      }
    },
    {
      slot: 1,
      type: {
        url: 'https://pokeapi.co/api/v2/type/10/',
        name: 'fire'
      }
    }
  ]
};

export default () => (
  <div className="w-60 center">
    <Helmet>
      <title>Pokemon View Page</title>
    </Helmet>
    <Link className="link underline blue hover-orange dib mt2" to="/">
      {'<'} back{' '}
    </Link>
    <PokemonView pokemon={dataPokemon} />
  </div>
);
