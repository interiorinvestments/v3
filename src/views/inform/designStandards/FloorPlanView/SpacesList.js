import {
  Avatar, Card, CardActionArea, CardHeader, Grid,
} from '@material-ui/core';
import Link from 'components/common/Link';

const spaces = [
  {
    name: 'Workstations',
    color: '#FFFFF0',
    href: '/inform/design-standards/workstations',
  },
  {
    name: 'Private Offices',
    color: '#CDE1E9',
    href: '/inform/design-standards/private-offices',
  },
  {
    name: 'Seating',
    color: '#C0C0C0',
    href: '/inform/design-standards/seating',
  },
  {
    name: 'Conference',
    color: '#D3EBAE',
    href: '/inform/design-standards/conference',
  },
  {
    name: 'Reception Area',
    color: '#FEF0DC',
    href: '/inform/design-standards/reception',
  },
  {
    name: 'Filing/Storage',
    color: '#B9C4C7',
    href: '/inform/design-standards/storage',
  },
];

const SpacesList = () => (
  <Grid container spacing={3}>
    {spaces.map((space) => (
      <Grid item lg={3} sm={6} xs={12} key={space.name}>
        <Card>
          <CardActionArea component={Link} href={space.href} naked>
            <CardHeader
              avatar={(
                <Avatar variant="square" alt={space.name} style={{ backgroundColor: space.color, color: space.color }} />
          )}
              title={space.name}
            />
          </CardActionArea>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default SpacesList;
