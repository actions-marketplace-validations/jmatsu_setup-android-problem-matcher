package io.github.jmatsu

import org.junit.Assert
import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.JUnit4

@RunWith(JUnit4::class)
class SampleTest {

    @Test
    fun ok() {

    }

    @Test
    fun ng() {
        Assert.assertEquals(true, false)
    }
}