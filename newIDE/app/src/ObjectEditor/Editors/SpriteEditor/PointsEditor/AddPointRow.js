import React from 'react';
import { TableRow, TableRowColumn } from '../../../../UI/Table';
import Add from '@material-ui/icons/Add';
import IconButton from '../../../../UI/IconButton';
import styles from './styles';

const AddPointRow = ({ onAdd }) => (
  <TableRow>
    <TableRowColumn style={styles.handleColumn} />
    <TableRowColumn />
    <TableRowColumn style={styles.coordinateColumn} />
    <TableRowColumn style={styles.coordinateColumn} />
    <TableRowColumn style={styles.toolColumn}>
      <IconButton size="small" onClick={onAdd}>
        <Add />
      </IconButton>
    </TableRowColumn>
  </TableRow>
);

export default AddPointRow;
