import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { color, size } from 'common'
import { BottomButton } from 'components'

export default function NameInput() {
  const navigation = useNavigation()
  const [value, onChangeText] = useState('')

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 144 * size.heightRate,
        paddingHorizontal: 32 * size.widthRate,
        backgroundColor: color.background.default,
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ width: '100%', height: '100%' }}>
          <Text
            style={{
              fontFamily: 'BMJUA',
              fontSize: size.normalizeFontSize(32),
              color: color.text.primary1,
              marginBottom: 72 * size.heightRate,
            }}>
            아이 이름
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={{
                width: 280 * size.widthRate,
                height: 40 * size.widthRate,
                borderRadius: 8 * size.widthRate,
                borderColor: color.palette.black4,
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(18),
                letterSpacing: 0.5 * size.widthRate,
                color: color.text.primary1,
              }}
              placeholder={'홍길동'}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
          </View>
          <View
            style={{
              width: 320 * size.widthRate,
              height: 1.5 * size.heightRate,
              backgroundColor: color.palette.mainDark,
              left: -10 * size.widthRate,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <BottomButton label={'다음'} isDisabled={value === ''} onPress={() => navigation.navigate('AgeInput')} />
    </KeyboardAvoidingView>
  )
}
