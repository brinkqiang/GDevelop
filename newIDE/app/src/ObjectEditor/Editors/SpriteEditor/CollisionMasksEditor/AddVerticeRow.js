import React from 'react';
import { TableRow, TableRowColumn } from '../../../../UI/Table';
import AddCircle from '@material-ui/icons/AddCircle';
import IconButton from '../../../../UI/IconButton';
import styles from './styles';

const AddVerticeRow = ({ onAdd }) => (
  <TableRow>
    <TableRowColumn style={styles.handleColumn} />
    <TableRowColumn />
    <TableRowColumn style={styles.coordinateColumn} />
    <TableRowColumn style={styles.coordinateColumn} />
    <TableRowColumn style={styles.toolColumn}>
      <IconButton size="small" onClick={onAdd}>
        <AddCircle />
      </IconButton>
    </TableRowColumn>
  </TableRow>
);

export default AddVerticeRow;
