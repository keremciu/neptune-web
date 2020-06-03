import React from 'react';
import Types from 'prop-types';

import { Alert, DefinitionList } from '@transferwise/components';
// import { Image, Markdown } from '@transferwise/components';

import JsonSchemaForm from '../jsonSchemaForm';

const DynamicInfo = (props) => {
  const { components } = props;

  const renderHeading = (heading) => {
    const alignClass = textAlign(heading.align);

    switch (heading.size) {
      case 'xs':
        return <h5 className={alignClass}> {heading.content} </h5>;
      case 'sm':
        return <h4 className={alignClass}> {heading.content} </h4>;
      case 'md':
        return <h3 className={alignClass}> {heading.content} </h3>;
      case 'xl':
        return <h1 className={alignClass}> {heading.content} </h1>;
      case 'lg':
      default:
        return <h2 className={alignClass}> {heading.content} </h2>;
    }
  };

  const renderParagraph = (paragraph) => {
    const alignClass = textAlign(paragraph.align);

    return <p className={alignClass}> {paragraph.content} </p>;
  };

  const renderList = (list) => {
    return (
      <ul>
        {list.items.map((item) => (
          <li key={JSON.stringify(item)} className={marginBottom(item.marginBottom)}>
            {item.title && <h5> {item.title} </h5>}
            {item.description}
          </li>
        ))}
      </ul>
    );
  };

  const getAlertSize = (size) => {
    switch (size) {
      case 'xs':
      case 'sm':
        return 'sm';
      case 'lg':
      case 'xl':
        return 'lg';
      default:
        return '';
    }
  };

  const renderAlert = (alert) => {
    const alertProps = {
      type: alert.context ? alert.context : 'info',
    };

    const size = getAlertSize(alert.size);
    if (size) {
      alertProps.size = size;
    }

    return <Alert {...alertProps}>{alert.content}</Alert>;
  };

  const mapItemToDefinition = ({ title, description }, index) => {
    return { key: String(index), title, value: description };
  };

  const renderReview = (review) => {
    return (
      <>
        <h4 className="page-header">
          {review.title}
          {review.edit && (
            <a href={review.edit.url} className="pull-right">
              {review.edit.title}
            </a>
          )}
        </h4>
        <DefinitionList definitions={review.items.map(mapItemToDefinition)} />
      </>
    );
  };

  const renderDivider = (divider) => {
    const margin = marginBottom(divider.marginBottom);
    const className = `m-t-0 ${margin}`;

    return <hr className={className} />;
  };

  const renderImage = (image) => {
    // eslint-disable-next-line
    const imageProps = {
      alt: image.content,
      src: image.url,
    };

    // return <Image {...imageProps} />;
  };

  // eslint-disable-next-line
  const renderMarkdown = ({ content }) => {
    // return <Markdown> {content} </Markdown>;
  };

  const renderColumns = (columns) => {
    let leftWidth = 'col-md-6';
    let rightWidth = 'col-md-6';

    if (columns.bias === 'left') {
      leftWidth = 'col-md-8';
      rightWidth = 'col-md-4';
    }
    if (columns.bias === 'right') {
      leftWidth = 'col-md-4';
      rightWidth = 'col-md-8';
    }

    return (
      <div className="row">
        <div className={leftWidth}>
          <DynamicInfo components={columns.left} />
        </div>
        <div className={rightWidth}>
          <DynamicInfo components={columns.right} />
        </div>
      </div>
    );
  };

  const renderForm = (form) => {
    return (
      <JsonSchemaForm
        schema={form.schema}
        model={form.model}
        submitted={false}
        onChange={onFormChange}
      />
    );
  };

  // eslint-disable-next-line
  const onFormChange = (model, isValid, schema) => {};

  const renderComponent = (item) => {
    switch (item.component) {
      case 'heading':
        return renderHeading(item);
      case 'paragraph':
        return renderParagraph(item);
      case 'list':
        return renderList(item);
      case 'image':
        return renderImage(item);
      case 'alert':
        return renderAlert(item);
      case 'review':
        return renderReview(item);
      case 'divider':
        return renderDivider(item);
      case 'markdown':
        return renderMarkdown(item);
      case 'columns':
        return renderColumns(item);
      case 'form':
        return renderForm(item);
      default:
        return '';
    }
  };

  const marginBottom = (size) => {
    switch (size) {
      case 'xs':
        return 'm-b-0';
      case 'sm':
        return 'm-b-1';
      case 'md':
        return 'm-b-2';
      case 'lg':
        return 'm-b-3';
      case 'xl':
        return 'm-b-5';
      default:
        return '';
    }
  };

  const textAlign = (align) => {
    switch (align) {
      case 'right':
        return 'text-xs-right';
      case 'center':
        return 'text-xs-center';
      case 'left':
      default:
        return '';
    }
  };

  return (
    <>
      {components.map((component) => (
        <div key={JSON.stringify(component)} className={marginBottom(component.marginBottom)}>
          {renderComponent(component)}
        </div>
      ))}
    </>
  );
};

DynamicInfo.propTypes = {
  components: Types.arrayOf(
    Types.shape({
      component: Types.string.isRequired,
      content: Types.string,
      url: Types.string,
      items: Types.arrayOf(
        Types.shape({
          title: Types.string,
          description: Types.string,
          marginBottom: Types.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
        }),
      ),
      size: Types.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
      align: Types.oneOf(['left', 'right', 'center']),
      context: Types.oneOf(['success', 'failure', 'warning', 'info']),
      marginBottom: Types.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    }),
  ).isRequired,
};

export default DynamicInfo;
