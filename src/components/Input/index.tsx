// Modules
import React, { PropsWithChildren, useState, memo } from 'react';
import { Field, FieldHookConfig, useField } from 'formik';

// Assets
import { IconEyeClose, IconEyeOpen } from '../../assets/icons';

// Stylized components
import { Container, Error } from './styles';

type InputProps = FieldHookConfig<string> & { iconEye?: boolean };

const Input = ({ iconEye, type, ...rest }: PropsWithChildren<InputProps>) => {
  const [inputType, setInputType] = useState('password');

  const [field, meta] = useField(rest);

  return (
    <>
      <Container error={!!meta.error && meta.touched}>
        <Field type={iconEye ? inputType : type} {...field} {...rest} />

        {iconEye && (
          <button
            type="button"
            onClick={() =>
              setInputType(inputType === 'password' ? 'text' : 'password')
            }
          >
            <img
              src={inputType === 'password' ? IconEyeClose : IconEyeOpen}
              alt="Show/Hide password"
            />
          </button>
        )}
      </Container>

      {meta.error && meta.touched && <Error>{meta.error}</Error>}
    </>
  );
};

export default memo(Input);
