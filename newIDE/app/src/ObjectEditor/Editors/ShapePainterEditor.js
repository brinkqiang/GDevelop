// @flow
import { Trans } from '@lingui/macro';

import * as React from 'react';
import Checkbox from '../../UI/Checkbox';
import ColorField from '../../UI/ColorField';
import { type EditorProps } from './EditorProps.flow';
import SemiControlledTextField from '../../UI/SemiControlledTextField';
import { ResponsiveLineStackLayout, ColumnStackLayout } from '../../UI/Layout';
const gd = global.gd;

export default class PanelSpriteEditor extends React.Component<
  EditorProps,
  void
> {
  render() {
    const { object } = this.props;
    const shapePainterObject = gd.asShapePainterObject(object);

    return (
      <ColumnStackLayout>
        <Checkbox
          label={
            <Trans>
              Draw the shapes relative to the object position on the scene
            </Trans>
          }
          checked={!shapePainterObject.areCoordinatesAbsolute()}
          onCheck={(e, checked) => {
            if (!checked) shapePainterObject.setCoordinatesAbsolute();
            else shapePainterObject.setCoordinatesRelative();
            this.forceUpdate();
          }}
        />
        <ResponsiveLineStackLayout noMargin>
          <ColorField
            floatingLabelText={<Trans>Outline color</Trans>}
            disableAlpha
            fullWidth
            color={{
              r: shapePainterObject.getOutlineColorR(),
              g: shapePainterObject.getOutlineColorG(),
              b: shapePainterObject.getOutlineColorB(),
              a: 255,
            }}
            onChangeComplete={color => {
              shapePainterObject.setOutlineColor(
                color.rgb.r,
                color.rgb.g,
                color.rgb.b
              );
              this.forceUpdate();
            }}
          />
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={<Trans>Outline opacity (0-255)</Trans>}
            fullWidth
            type="number"
            value={shapePainterObject.getOutlineOpacity()}
            onChange={value => {
              shapePainterObject.setOutlineOpacity(parseInt(value, 10) || 0);
              this.forceUpdate();
            }}
          />
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={<Trans>Outline size (in pixels)</Trans>}
            fullWidth
            type="number"
            value={shapePainterObject.getOutlineSize()}
            onChange={value => {
              shapePainterObject.setOutlineSize(parseInt(value, 10) || 0);
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
        <ResponsiveLineStackLayout noMargin>
          <ColorField
            floatingLabelText={<Trans>Fill color</Trans>}
            disableAlpha
            fullWidth
            color={{
              r: shapePainterObject.getFillColorR(),
              g: shapePainterObject.getFillColorG(),
              b: shapePainterObject.getFillColorB(),
              a: 255,
            }}
            onChangeComplete={color => {
              shapePainterObject.setFillColor(
                color.rgb.r,
                color.rgb.g,
                color.rgb.b
              );
              this.forceUpdate();
            }}
          />
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={<Trans>Fill opacity (0-255)</Trans>}
            fullWidth
            type="number"
            value={shapePainterObject.getFillOpacity()}
            onChange={value => {
              shapePainterObject.setFillOpacity(parseInt(value, 10) || 0);
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
      </ColumnStackLayout>
    );
  }
}
